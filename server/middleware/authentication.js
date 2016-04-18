var jwt = require('jsonwebtoken');


// Middleware that cheks if token exist in request and inject it for future
// routes. Then we can check req.user and know if we authenticated or not
function decodeToken(req, res, next) {
  var token = req.body.token || req.query.token
                             || req.headers['x-access-token'];

  if (token){
    jwt.verify(token, 'secret string', function(err, user) {
      if (err) {
        res.status(401).json({
          success: false,
          message: 'failed to authenticate token'
        });
      } else {
        req.user = user;
        next();
      }
    });

  }else {
    next();
  }
}

module.exports = {
  decodeToken: decodeToken
};
