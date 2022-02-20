/**
 * Handle asynchrounous error from callback that passed to this function
 * @param {function(): void} callback - Callback to run
 * @returns {(req: Request, res: Response, next: import("express").NextFunction) => void}  Return middleware function that can handle asynchronous error
 */
function asyncRouteHandler(callback) {
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
}

module.exports = asyncRouteHandler;
