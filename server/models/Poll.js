var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var pollSchema = new mongoose.Schema({
  question: String,
  choices: Object,
  totalVotes: Number,
  user_id: String,
  author: String

});

pollSchema.plugin(timestamps);
var Poll = mongoose.model('Poll', pollSchema);

module.exports = Poll;
