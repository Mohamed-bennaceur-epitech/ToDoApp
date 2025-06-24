const router = require('express').Router();
const { body, param, validationResult } = require('express-validator');
const Todo = require('../models/Todo');

function handleValidation(req) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const err = new Error('Validation failed');
    err.status = 400;
    err.details = errors.array();
    throw err;
  }
}

// Get all todos
router.get('/', async (req, res, next) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    next(err);
  }
});

// Create a todo
router.post(
  '/',
  body('text').trim().notEmpty().withMessage('Text is required'),
  async (req, res, next) => {
    try {
      handleValidation(req);
      const todo = await Todo.create({ text: req.body.text });
      res.status(201).json(todo);
    } catch (err) {
      next(err);
    }
  },
);

// Toggle complete
router.put(
  '/:id',
  param('id').isMongoId().withMessage('Invalid todo id'),
  async (req, res, next) => {
    try {
      handleValidation(req);
      const todo = await Todo.findById(req.params.id);
      if (!todo) {
        const error = new Error('Todo not found');
        error.status = 404;
        throw error;
      }
      todo.completed = !todo.completed;
      await todo.save();
      res.json(todo);
    } catch (err) {
      next(err);
    }
  },
);

// Delete a todo
router.delete(
  '/:id',
  param('id').isMongoId().withMessage('Invalid todo id'),
  async (req, res, next) => {
    try {
      handleValidation(req);
      await Todo.findByIdAndDelete(req.params.id);
      res.json({ success: true });
    } catch (err) {
      next(err);
    }
  },
);

module.exports = router;
