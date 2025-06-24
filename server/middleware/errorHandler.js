module.exports = (err, req, res, _next) => {
  void _next;
  console.error(err);
  const status = err.status || 500;
  const response = { error: err.message || 'Internal Server Error' };
  if (err.details) {
    response.details = err.details;
  }
  res.status(status).json(response);
};
