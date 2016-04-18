var express = require('express');
var router = express.Router();

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



router.get('/polls', (req, res) => {
  res.send(data);
});

router.get('/poll/:id', (req, res) => {
  res.send(data[req.params.id - 1]);
});




module.exports = router;
