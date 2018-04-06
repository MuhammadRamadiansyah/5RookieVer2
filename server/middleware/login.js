const jwt = require('jsonwebtoken')

module.exports = {
    
    loginStatus= function(req, res, next){

    let token = storage.getItem('token')
    let secretKey = process.env.keycode
    jwt.verify(token, secretKey, function(err, decoded) {
    if(err) {
        res.status(403).json({
        message: "You are not allowed to access this page"
      })
      }else{
            next()
        }
        })
    }   
}