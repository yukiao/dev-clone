module.exports = (callback) => {
  return async function (req, res, next) {
    try {
      callback();
    } catch (err) {
      if (e instanceof ValidationError) {
        res.status(400);
      }
      next(e);
    }
  };
};
