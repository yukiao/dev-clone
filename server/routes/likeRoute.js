const router = require("express").Router();
const isAuthenticate = require("../helpers/authMiddleware");
const { Like } = require("../database/models");
const { SUCCESS } = require("../helpers/const");
const asyncHandler = require("../helpers/asyncRouteHandler");

router.post("/", isAuthenticate, (req, res, next) => {
  asyncHandler(async function () {
    const likeBody = {};
    likeBody.userId = req.user.id;
    likeBody.postId = req.body.postId;

    const exist = await Like.findOne({
      where: {
        userId: likeBody.userId,
        postId: likeBody.postId,
      },
    });

    if (exist) {
      res.status(409);
      throw new Error("Already like");
    }

    const newLike = await Like.create(likeBody);
    res.status(201).json({
      status: SUCCESS,
      data: {
        msg: "Like has been added",
      },
    });
  })(req, res, next);
});

router.get("/", (req, res, next) => {
  asyncHandler(async function () {
    const listOfLike = await Like.findAll();
    res.json({
      status: SUCCESS,
      data: {
        msg: listOfLike.length,
      },
    });
  })(req, res, next);
});

router.get("/isLiked", isAuthenticate, (req, res, next) => {
  asyncHandler(async function () {
    const exist = await Like.findOne({
      where: {
        userId: req.user.id,
        postId: req.query.postId,
      },
    });

    if (exist) {
      return res.json({
        status: SUCCESS,
        data: {
          id: exist.id,
        },
      });
    } else {
      const err = new Error("Not liked yet");
      res.status(404);
      return next(err);
    }
  })(req, res, next);
});

router.delete("/:id", isAuthenticate, (req, res, next) => {
  asyncHandler(async () => {
    const likeId = req.params.id;

    const exist = await Like.findOne({
      where: {
        id: likeId,
      },
    });

    if (exist) {
      await Like.destroy({
        where: {
          id: likeId,
        },
      });

      return res.json({
        status: SUCCESS,
        data: {
          msg: "Like has been deleted",
        },
      });
    } else {
      const err = new Error("Like id not found");
      res.status(404);
      return next(err);
    }
  })(req, res, next);
});

module.exports = router;
