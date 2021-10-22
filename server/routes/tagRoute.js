const router = require("express").Router();
const isAuthenticated = require("../helpers/authMiddleware");
const asyncHandler = require("../helpers/asyncRouteHandler");
const { Tag, Sequelize } = require("../database/models");
const { Op } = Sequelize;
const { SUCCESS } = require("../helpers/const");

router.post("/", isAuthenticated, (req, res, next) => {
  asyncHandler(async () => {
    const tagBody = req.body;
    const tagName = tagBody.tagName.toLowerCase();

    const tagExist = await Tag.findOne({
      where: {
        tagName,
      },
    });

    if (tagExist) {
      res.status(409);
      throw new Error("Tag already exist");
    }

    const newTag = await Tag.create(tagBody);
    res.status(201).json({
      status: SUCCESS,
      data: {
        msg: "Tag has been created",
      },
    });
  })(req, res, next);
});

router.get("/", isAuthenticated, (req, res, next) => {
  asyncHandler(async () => {
    const query = req.query.search;

    const tagList = await Tag.findAll({
      where: {
        tagName: {
          [Op.substring]: `${query}`,
        },
      },
    });

    res.json({
      status: SUCCESS,
      data: {
        content: tagList,
        msg: "Successfully retrieve tags",
      },
    });
  })(req, res, next);
});

module.exports = router;
