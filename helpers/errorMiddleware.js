const { Sequelize } = require("../database/models");
const { ValidationError } = Sequelize;
const { FAIL } = require("./const");

const notFound = (req, res, next) => {
  const error = new Error(`${req.originalUrl} not found`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);

  if (err instanceof ValidationError) {
    err.message = err.errors[0].message;
  }

  res.json({
    status: FAIL,
    data: {
      msg: err.message,
    },
  });
};

module.exports = {
  notFound,
  errorHandler,
};
