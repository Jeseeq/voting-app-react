var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var utils = require('../utils/index');
var User = require('../models/User');


function isUserUnique(reqBody, cb) {

  var username = reqBody.username ? reqBody.username.trim() : '';
  var email = reqBody.email ? reqBody.email.trim() : '';

  User.findOne({
    $or: [{
      'username' : new RegExp(['^', username, '$'].join(''), 'i')
    },{
      'email': new RegExp(['^', email, '$'].join(''), 'i')
    }]
  }, function(err, user) {
    if (err) throw err;

    if (!user){
      cb();
      return;
    }

    var err;
    if (user.username === username){
      err = {};
      err.username = '' + username + ' is not unique';
    }
    if (user.email === email){
      err = err ? err : {};
      err.email = '' + email + ' is not unique';
    }
    cb(err);
  });

}


router.get('/users/?', function(req, res) {
  User.find({})
  .select({
    password: 0,
    __v: 0,
    updatedAt: 0,
    createdAt: 0
  })
  .limit(100)
  .sort({
    createdAt: -1
  })
  .exec(function(err, users) {
    if (err) {
      return res.status(500).json({
        error: 'Could not retrive users'
      });
    }
    res.json(users);
  });
});

router.post('/users/signup', function(req, res) {
  var body = req.body;

  isUserUnique(body, function(err) {
    if (err){
      return res.status(403).json(err);
    }

    var hash = bcrypt.hashSync(body.password.trim(), 10);

    var user = new User({
      username: body.username.trim(),
      name: body.name.trim(),
      email: body.email.trim(),
      password: hash,
      admin: false
    });

    user.save(function(err, user) {

      if (err) throw err;

      var token = utils.generateToken(user);
      user = utils.getCleanUser(user);

      res.json({
        user: user,
        token: token
      });

    });
  });
});

router.post('/users/signin', function(req, res) {
  User.findOne({
    username: req.body.username
  })
  .select({
    __v: 0,
    updatedAt: 0,
    createdAt: 0
  })
  .exec(function(err, user) {
    if (err) throw err;

    if (!user){
      return res.status(404).json({
        error: true,
        message: 'Username is wrong'
      });
    }
    bcrypt.compare(req.body.password, user.password, function(err, valid) {
      if (!valid){
        return res.status(404).json({
          error: true,
          message: 'Password is wrong'
        });
      }
      var token = utils.generateToken(user);
      user = utils.getCleanUser(user);

      res.json({
        user: user,
        token: token
      });

    });

  });
});

router.get('/user/from/token', function(req, res) {

  // check for token

  var token = req.body.token || req.query.token
                             || req.headers['x-access-token'];

  if (!token){
    return res.status(401).json({
      message: 'Must passs token'
    });
  }
  // Otherwise decode token
  jwt.verify(token, 'secret string', function(err, user) {
    if (err) throw err;

    User.findById({
      _id: user._id
    }, function(err, user) {

      if (err) throw err;

      user = utils.getCleanUser(user);

      res.json({
        user: user,
        token: token
      });

    });
  });



});



module.exports = router;
