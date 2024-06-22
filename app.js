const express = require("express");
const morgan = require("morgan");
const creatError = require("http-errors");
const dotenv = require("dotenv");
const { create } = require("underscore");

dotenv.config();

const app = express();

app.get("/", async (req, res, next) => {
  res.send("Hello From Express");
});

app.all("*", async (req, res, next) => {
  // const error = new Error("Not Found");
  // error.status = 404;
  // next(error);
  // next(creatError.NotFound("This route does not exist"));
  next(creatError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`The Server is running on port ${PORT}`);
});
