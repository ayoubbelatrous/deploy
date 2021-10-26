const jwt = require('jsonwebtoken')
require('dotenv').config()
module.exports = function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  console.log(token)

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    console.log(err)
    if (err) {
      res.json({error:'please auth'})
      next()
    }
    req.user = user
    next()
  })



}


