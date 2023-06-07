const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    // unique email
    unique: true,
  },
  question01: {
    type: String,
    required: true,
  },
  question02: {
    type: String,
    required: true,
  },
  question03: {
    type: String,
    required: true,
  },
  question04: {
    type: String,
    required: true,
  },
  question05: {
    type: Number,
    required: true,
  },
  question06: {
    type: String,
    required: true,
  },
  feedback: {
    type: String,
    required: true,
  }
});

const users = mongoose.model('users', userSchema);

module.exports = users;