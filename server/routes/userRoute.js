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

router.post("/login", passport.authenticate("local"), function (req, res) {
  res.json({
    status: SUCCESS,
    data: {},
  });
});

module.exports = router;
