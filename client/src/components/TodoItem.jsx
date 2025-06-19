function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="flex items-center justify-between mb-2">
      <span
        onClick={() => onToggle(todo._id)}
        className={`flex-grow cursor-pointer ${todo.completed ? 'line-through text-gray-400' : ''}`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => onDelete(todo._id)}
        className="text-red-500 ml-2"
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
