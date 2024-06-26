const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },

  passowrd: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('user', userSchema);

module.exports = User;
