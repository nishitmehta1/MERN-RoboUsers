const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
  user_name: {
    type: String
  },
  user_password: {
    type: String
  },
  user_ein: {
    type: String
  },
  user_university: {
    type: String
  },
  user_gender: {
    type: String
  },
  user_company: {
    type: String
  }
});

module.exports = mongoose.model('User', User);
