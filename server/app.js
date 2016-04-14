var express = require('express');

var app = express.Router();

var data = [
  {
    id: 1,
    title: 'Best phone'
  },
  {
    id: 2,
    title: 'favorite food'
  },
  {
    id: 3,
    title: 'favorite book'
  },
  {
    id: 4,
    title: 'favorite film'
  },
  {
    id: 5,
    title: 'favorite yo'
  },
];

app.get('/api/polls', (req, res) => {
  res.send(data);
});

module.exports = app;
