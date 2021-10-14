const router = require("express").Router();
const { Sequelize, User } = require("../database/models");
const { Op } = Sequelize;
const { SUCCESS } = require("../helpers/const");

router.post("/login", async (req, res, next) => {
  try {
    console.log(req.body);
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
    if (e.name === "SequelizeValidationError") {
      res.status(400);
    }
    next(e);
  }
});

module.exports = router;