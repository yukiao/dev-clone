require("dotenv").config();

const express = require("express");
const app = express();
const { userRoute } = require("./routes");
const { FAIL } = require("./helpers/const");

const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use("/", (req, res) => {
//   console.log("Index Route");
// });

app.use("/api", userRoute);

app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);

  if (err.name === "SequelizeValidationError") {
    err.message = err.errors[0].message;
  }

  res.json({
    status: FAIL,
    data: {
      msg: err.message,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
