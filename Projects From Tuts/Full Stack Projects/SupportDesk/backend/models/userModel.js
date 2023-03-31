const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    name: {
      type: 'String',
      required: [true, 'Add a name'],
    },
    password: {
      type: 'String',
      required: [true, 'Add a password'],
    },
    email: {
      type: 'String',
      required: [true, 'Add an email'],
    },
    isAdmin: {
      type: 'Boolean',
      required: true,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
