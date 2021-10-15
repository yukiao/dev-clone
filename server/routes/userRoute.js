const router = require("express").Router();
const passport = require("../config/passportConfig");
const { Sequelize, User } = require("../database/models");
const { Op, ValidationError } = Sequelize;
const { SUCCESS } = require("../helpers/const");
const isAuthenticated = require("../helpers/authMiddleware");

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

module.exports = router;
