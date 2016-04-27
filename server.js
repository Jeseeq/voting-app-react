require('css-modules-require-hook')({
  generateScopedName: '[path][name]-[local]',
});
require('babel-register');

var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var favicon = require('serve-favicon');
var chokidar = require('chokidar');
var webpack = require('webpack');
var config = require('./webpack.config');
var compiler = webpack(config);
var app = express();
var db = require('./server/db');
db.connect();

// Serve hot-reloading bundle to client
app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true, publicPath: config.output.publicPath
}));
app.use(require("webpack-hot-middleware")(compiler));

// Do "hot-reloading" of express stuff on the server
// Throw away cached modules and re-require next time
// Ensure there's no important state in there!
var watcher = chokidar.watch('./server');

watcher.on('ready', function() {
  watcher.on('all', function() {
    console.log("Clearing /server/ module cache from server");
    Object.keys(require.cache).forEach(function(id) {
      if (/[\/\\]server[\/\\]/.test(id)) delete require.cache[id];
    });
  });
});

// Do "hot-reloading" of react stuff on the server
// Throw away the cached client modules and let them be re-required next time
compiler.plugin('done', function() {
  console.log("Clearing /client/ module cache from server");
  Object.keys(require.cache).forEach(function(id) {
    if (/[\/\\]client[\/\\]/.test(id)) delete require.cache[id];
  });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(favicon(__dirname + '/dist/' + 'favicon.ico'));

var authentication = require('./server/middleware/authentication');
app.use(authentication.decodeToken);

// routes
var users = require('./server/api/users');
var polls = require('./server/api/polls');

app.use('/api/', polls);
app.use('/api/', users);
app.use('/', express.static(__dirname + '/dist'));

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/dist/' + 'index.html');
});





var http = require('http');
var server = http.createServer(app);
server.listen(process.env.PORT || 3000, '0.0.0.0', function(err) {
  if (err) throw err;

  var addr = server.address();

  console.log('Listening at http://%s:%d', addr.address, addr.port);
});
