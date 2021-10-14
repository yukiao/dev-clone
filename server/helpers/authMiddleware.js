const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) return next();

  const error = new Error("Unauthorise");
  res.status(401);
  next(error);
};

module.exports = isAuthenticated;
