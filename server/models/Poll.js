var mongoose = require('mongoose');

var PollSchema = new mongoose.Schema({
  id: Number,
  title: String,
  // Think what to add

});

var Poll = mongoose.model('Poll', PollSchema);

module.exports = Poll;
