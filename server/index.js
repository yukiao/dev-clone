require("dotenv").config();

const express = require("express");
const app = express();

const PORT = process.env.PORT;

app.use("/", (req, res) => {
  console.log("Index Route");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
