const router = require("express").Router();
const passport = require("../config/passportConfig");
const { Sequelize, User } = require("../database/models");
const { Op, ValidationError } = Sequelize;
const { SUCCESS } = require("../helpers/const");

/**
 * @description Route for register new user
 * @route /api/user/signup
 * @access public
 */
router.post("/signup", async (req, res, next) => {
  try {
    const userData = req.body;
    const isExist = await User.findOne({
      where: {
        [Op.or]: [{ email: userData.email }, { username: userData.username }],
      },
    });

    if (isExist) {
      res.status(409);
      throw new Error("Account already taken");
    }

    const newUser = await User.create(userData);

    res.status(201).json({
      status: SUCCESS,
      data: {
        msg: "Account has been created",
      },
    });
  } catch (e) {
    if (e instanceof ValidationError) {
      res.status(400);
    }
    next(e);
  }
});

/**
 * @description Route for login
 * @route /api/user/login
 * @access public
 */
router.post("/login", function (req, res, next) {
  passport.authenticate("local", function (err, user, info) {
    if (err) return err;
    if (!user) {
      res.status(401);
      const err = new Error(info.message);
      return next(err);
    }
    req.logIn(user, (err) => {
      if (err) return next(err);
      return res.json({
        status: SUCCESS,
        data: {},
      });
    });
  })(req, res, next);
});

/**
 * @description Route for checking if user is currently login
 * @route /api/user/isLogin
 * @access public
 */
router.get("/isLogin", (req, res) => {
  if (req.isAuthenticated()) {
    return res.json({
      status: SUCCESS,
      data: {},
    });
  }

  const error = new Error("Unauthorise");
  res.status(401);
  next(error);
});

router.delete("/logout", (req, res, next) => {
  try {
    req.logOut();
    return res.json({
      status: SUCCESS,
      data: {
        msg: "Successfully logout",
      },
    });
  } catch (e) {
    if (e instanceof ValidationError) {
      res.status(400);
    }
    next(e);
  }
});
module.exports = router;
