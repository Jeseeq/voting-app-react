var express = require('express');
var router = express.Router();

var Poll = require('../models/Poll');

var data = [
  {
    id: 1,
    title: 'Best phone',
    content: 'yo dawg'
  },
  {
    id: 2,
    title: 'favorite food',
    content: 'awesome react'
  },
  {
    id: 3,
    title: 'favorite book',
    content: 'foo bar'
  },
  {
    id: 4,
    title: 'favorite film',
    content: 'helo world'
  },
  {
    id: 5,
    title: 'favorite yo',
    content: 'test router'
  },
];



router.post('/polls', function(req, res) {
  if (!req.user){
    return res.status(401).send('Must authenticate to creacte a new poll');
  }
  var body = req.body;
  var poll = new Poll({
    question: body.question,
    choices: body.choices,
    totalVotes: 0,
    user_id: req.user._id
  });

  poll.save(function(err, poll) {
    if (err) throw err;

    res.json(poll);

  });

});

router.get('/polls', (req, res) => {

  console.log(req.user);
  res.send(data);
});

router.get('/poll/:id', (req, res) => {
  res.send(data[req.params.id - 1]);
});




module.exports = router;
