var express = require('express');
var router = express.Router();

var Poll = require('../models/Poll');

// Creacte a new poll
router.post('/polls', function(req, res) {
  var body = req.body;
  var valid = {};
  if (!req.user){
    return res.status(401).send('Must authenticate to creacte a new poll');
  }
  console.log(body.choices.length);
  if (typeof body.question !== 'string'){
    return res.status(400).send('Invalid question');
  } else if (typeof body.choices !== 'object' || body.choices.length < 2){
    return res.status(400).send('A poll must have minimum 2 choices');
  } else if (typeof body.choices !== 'object' || body.choices.length > 20){
    return res.status(400).send('A poll must have maximum 20 choices');
  }

  valid.question = body.question;
  var choices = {};
  body.choices.forEach(function(choice) {
    choices[choice] = 0;
  });
  valid.choices = choices;

  var poll = new Poll({
    question: valid.question,
    choices: valid.choices,
    totalVotes: 0,
    user_id: req.user._id,
    author: req.user.username
  });

  poll.save(function(err, poll) {
    if (err) throw err;

    res.json(poll);

  });

});

// Get all polls
router.get('/polls', (req, res) => {

  Poll.find({})
  .select({
    __v: 0,
    updatedAt: 0,
    createdAt: 0
  })
  .sort({
    createdAt: -1
  })
  .exec(function(err, polls) {
    if (err){
      return res.status(500).json({
        error: 'Could not retrive polls'
      });
    }
    res.json(polls);
  });
});

// Get poll by id
router.get('/polls/:id', (req, res) => {
  var pollId = req.params.id;

  Poll.findById({
    _id: pollId
  })
  .select({
    __v: 0,
    updatedAt: 0,
    createdAt: 0,
  })
  .exec(function(err, poll) {
    if (err){
      return res.status(500).send('There was an error completing your request');
    }

    if (!poll){
      return res.status(404).send('Could not find poll');
    }
    res.json(poll);
  });
});




module.exports = router;
