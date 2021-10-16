const router = require("express").Router();
const { Sequelize, Post, User } = require("../database/models");
const { SUCCESS } = require("../helpers/const");
const { ValidationError } = Sequelize;
const isAuthenticate = require("../helpers/authMiddleware");

/**
 * @description Create new post
 * @route POST /api/posts/
 * @access private
 */
router.post("/", isAuthenticate, async (req, res, next) => {
  try {
    let postBody = req.body;
    postBody = { ...postBody, userId: req.user.id };

    const newPost = await Post.create(postBody);
    res.status(201).json({
      status: SUCCESS,
      data: {
        id: newPost.id,
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
 * @description Fetch all post
 * @route GET /api/posts/
 * @access public
 */
router.get("/", async (req, res, next) => {
  try {
    const posts = await Post.findAll({
      attributes: {
        exclude: ["userId"],
      },
      include: [
        {
          model: User,
          attributes: ["username", "name", "profilePicture"],
        },
      ],
    });
    res.json({
      status: SUCCESS,
      data: {
        posts,
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
 * @description Find all post with certain username
 * @route GET /api/posts/:username
 * @access public
 */
router.get("/currentUser", isAuthenticate, async (req, res, next) => {
  try {
    const id = req.user.id;
    const posts = await Post.findAll({
      attributes: {
        exclude: ["userId"],
      },
      include: [
        {
          model: User,
          attributes: ["username", "name", "profilePicture"],
          where: {
            id,
          },
        },
      ],
    });
    res.json({
      status: SUCCESS,
      data: {
        posts,
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
 * @description Find all post with certain username
 * @route GET /api/posts/:username
 * @access public
 */
router.get("/:username", async (req, res, next) => {
  try {
    const username = req.params.username;
    const posts = await Post.findAll({
      attributes: {
        exclude: ["userId"],
      },
      include: [
        {
          model: User,
          attributes: ["username", "name", "profilePicture"],
          where: {
            username,
          },
        },
      ],
    });
    res.json({
      status: SUCCESS,
      data: {
        posts,
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
