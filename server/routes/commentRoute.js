const router = require("express").Router();
const { Post, Comment } = require("../database/models");
const asyncHandler = require("../helpers/asyncRouteHandler");
const isAuthenticated = require("../helpers/authMiddleware");
const { SUCCESS } = require("../helpers/const");

router.post("/", isAuthenticated, (req, res, next) => {
  asyncHandler(async () => {
    const commentBody = req.body;
    commentBody.userId = req.user.id;

    const postExist = await Post.findOne({
      where: {
        id: body.postId,
      },
    });

    if (!postExist) {
      res.status(404);
      throw new Error("Post not exist");
    }

    const newComment = await Comment.create(commentBody);

    res.status(201).json({
      status: SUCCESS,
      data: {
        msg: "Comment has been added to post",
      },
    });
  })(req, res, next);
});

router.get("/", (req, res, next) => {
  asyncHandler(async () => {
    const postId = req.query.postId;

    const postExist = await Post.findOne({
      where: {
        id: body.postId,
      },
    });

    if (!postExist) {
      res.status(404);
      throw new Error("Post not exist");
    }

    const comments = await Comment.findAll({
      where: {
        postId,
      },
    });

    res.json({
      status: SUCCESS,
      data: {
        content: comments,
        count: comments.length,
      },
    });
  })(req, res, next);
});

router.put("/:id", isAuthenticated, (req, res, next) => {
  asyncHandler(async () => {
    const id = req.params.id;
    const userId = req.user.id;
    const body = req.body;

    const commentExist = await Comment.findOne({
      where: {
        id: id,
      },
    });

    if (!commentExist) {
      res.status(404);
      throw new Error("Comment not found");
    }

    if (commentExist.userId !== userId) {
      res.status(401);
      throw new Error("Unathorised");
    }

    await Comment.update(body, {
      where: {
        id: id,
      },
    });

    res.json({
      status: SUCCESS,
      data: {
        msg: "Comment has been updated",
      },
    });
  })(req, res, next);
});

router.delete("/:id", isAuthenticated, (req, res, next) => {
  asyncHandler(async () => {
    const id = req.params.id;
    const userId = req.user.id;

    const commentExist = await Comment.findOne({
      where: {
        id: id,
      },
    });

    if (!commentExist) {
      res.status(404);
      throw new Error("Comment not found");
    }

    if (commentExist.userId !== userId) {
      res.status(401);
      throw new Error("Unathorised");
    }

    await User.destroy({
      where: { id: id },
    });

    res.json({
      status: SUCCESS,
      data: {
        msg: "Comment has been deleted",
      },
    });
  })(req, res, next);
});

module.exports = router;
