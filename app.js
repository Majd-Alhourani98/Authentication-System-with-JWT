const express = require("express");
const morgan = require("morgan");
const creatError = require("http-errors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.get("/", async (req, res, next) => {
  res.send("Hello From Express");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`The Server is running on port ${PORT}`);
});
