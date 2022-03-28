/**
 * TODO: Kiểm tra đăng nhập
 * @param req {Request}
 * @param res {Response}
 * @param next
 */
module.exports.auth = (req, res, next) => {
  next();
};

/**
 * TODO: Kiểm tra user có phải admin
 * @param req {Request}
 * @param res {Response}
 * @param next
 */
module.exports.isAdmin = (req, res, next) => {
  next();
};
