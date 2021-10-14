require("dotenv").config();

const express = require("express");
const app = express();
const { userRoute } = require("./routes");
const { notFound, errorHandler } = require("./helpers/errorMiddleware");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", userRoute);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
