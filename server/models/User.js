var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  avatar: {
    type: String,
    default: '/dist/avatar.png'
  },
  admin: Boolean

});

userSchema.plugin(timestamps);
var User = mongoose.model('User', userSchema);
module.exports = User;
