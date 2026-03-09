// loggerMiddleware.js

function loggerMiddleware(req, res, next) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next();  // pass control to the next handler
}

module.exports = loggerMiddleware;
