var config = require('./config');
var mongoose = require('mongoose');


module.exports.connect = function(cb) {
  var db = mongoose.connect(config.db.uri, config.db.options, function(err) {
    if (err){
      console.log('Cold not connect to db (check mongod service)');
    } else if (cb){
      cb(db);
    }
  });
};
