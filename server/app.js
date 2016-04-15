var express = require('express');

var app = express.Router();

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

app.get('/api/polls', (req, res) => {
  res.send(data);
});

app.get('/api/poll/:id', (req, res) => {
  res.send(data[req.params.id - 1]);
});
module.exports = app;
