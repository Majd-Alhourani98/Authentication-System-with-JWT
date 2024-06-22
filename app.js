const express = require('express');
const morgan = require('morgan');
const creatError = require('http-errors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
// Importing Routers
const authRouter = require('./routes/authRoutes');

dotenv.config();

const app = express();

// lOGGIN WITH MORGAN
app.use(morgan('dev'));

app.use('/api/auth', authRouter);

app.all('*', async (req, res, next) => {
  // const error = new Error("Not Found");
  // error.status = 404;
  // next(error);
  // next(creatError.NotFound("This route does not exist"));
  next(creatError.NotFound());
});

mongoose
  .connect(process.env.MONGODB_URL.replace(process.env.MONGODB_DATABASE_NAME))
  .then(() => {
    console.log('MongoDB conncted');
  })
  .catch(() => {
    console.log('Failed to Connect to the Database');
  });

mongoose.connection.on('connected', () => {
  console.log('Mongoose conneted to db');
});

mongoose.connection.on('error', err => {
  console.log(err.message);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose connection is disconnected.');
});

process.on('SIGINT', async () => {
  await mongoose.connection.close();
  process.exit(0);
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
