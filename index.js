require("dotenv").config();

const express = require("express");
const app = express();
const {
  userRoute,
  postRoute,
  likeRoute,
  commentRoute,
  tagRoute,
  postTagRoute,
} = require("./routes");
const { notFound, errorHandler } = require("./helpers/errorMiddleware");
const session = require("cookie-session");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true,
    keys: [process.env.SESSION_KEY],
  })
);

const passport = require("./config/passportConfig");

app.use(passport.initialize());
app.use(passport.session());

if (process.env.NODE_ENV === "development") {
  const morgan = require("morgan");
  app.use(morgan("dev"));
}

app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/likes", likeRoute);
app.use("/api/comments", commentRoute);
app.use("/api/tags", tagRoute);
app.use("/api/postTags", postTagRoute);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
