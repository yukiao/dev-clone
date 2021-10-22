const router = require("express").Router();
const isAuthenticated = require("../helpers/authMiddleware");
const asyncHandler = require("../helpers/asyncRouteHandler");
const { Tag, Post, User, PostTag } = require("../database/models");
const { SUCCESS } = require("../helpers/const");

router.post("/", isAuthenticated, (req, res, next) => {
  asyncHandler(async () => {
    const postTagBody = req.body;
    const userId = req.user.id;

    const postExist = await Post.findOne({
      where: {
        id: postTagBody.postId,
      },
    });

    const userExist = await User.findOne({
      where: {
        id: userId,
      },
    });

    if (!postExist) {
      res.status(404);
      throw new Error("Post not found");
    }
    if (!userExist) {
      res.status(404);
      throw new Error("User not found");
    }
    if (userId !== postExist.userId) {
      res.status(401);
      throw new Error("Unauthorised");
    }

    const newPostTag = await PostTag.create(postTagBody);
    res.status(201).json({
      status: SUCCESS,
      data: {
        msg: "postTag has been created",
      },
    });
  })(req, res, next);
});

router.get("/", (req, res, next) => {
  asyncHandler(async () => {
    const postId = req.query.postId;

    const postTagList = await PostTag.findAll({
      where: {
        postId,
      },
    });

    res.json({
      status: SUCCESS,
      data: {
        msg: "Retrieved all post tags",
        content: postTagList,
      },
    });
  })(req, res, next);
});

router.delete("/", isAuthenticated, (req, res, next) => {
  asyncHandler(async () => {
    const userId = req.user.id;

    const postId = req.query.postId;
    const tagId = req.query.tagId;

    const postExist = await Post.findOne({
      where: {
        id: postId,
      },
    });

    const tagExist = await Tag.findOne({
      where: {
        id: tagId,
      },
    });

    const userExist = await User.findOne({
      where: {
        id: userId,
      },
    });

    if (!userExist) {
      res.status(404);
      throw new Error("User not found");
    }
    if (!postExist) {
      res.status(404);
      throw new Error("Post not found");
    }
    if (!tagExist) {
      res.status(404);
      throw new Error("Tag not found");
    }

    await PostTag.destroy({
      where: {
        tagId,
        postId,
      },
    });

    res.json({
      status: SUCCESS,
      data: {
        msg: "Successfully delete post tag",
      },
    });
  })(req, res, next);
});
module.exports = router;
