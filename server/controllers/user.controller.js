const FB = require('fb')
FB.setAccessToken('access_token');
var accessToken = FB.getAccessToken();
const jwt = require('jsonwebtoken')
const secretKey = process.env.rahasia
const user = require('../models/user')
const mongoose = require('mongoose');

module.exports = {
  login: function(req, res) {
    let token = req.headers.tokenfb
    FB.api('me', {
      fields: ['id', 'name', 'email'],
      access_token: token
    }, function(response) {
      user.findOne({
          email: response.email
        })
        .exec()
        .then(userDatabase => {

          let token = jwt.sign({
            id: response.id,
            name: response.name,
            email: response.email
          }, secretKey);
          response.token = token
          res.status(200).json({
            response,
            userDatabase
          })
        })
    });
  },
  register: function(req, res) {
    let secretKey = process.env.rahasia
    let token = req.headers.token

    jwt.verify(token, secretKey, function(err, decoded) {
      if (err) {
        console.log('err')
      } else {
        let newData = {
          name: decoded.name,
          position: req.body.position,
          dotaId: req.body.dotaId,
          email: decoded.email,
          nickname: 'tes',
          password: 'tes'
        }
        let newUser = new user(newData)
        newUser.save()
          .then(newUser => {
            res.status(201).json({
              newData,
              decoded
            })
          })
      }
    })
  },
  giveToken: function(req, res) {
    let token = req.headers.token
    let secretKey = process.env.rahasia
    jwt.verify(token, secretKey, function(err, response) {
      if (err) {
        console.log(err)
      } else {
        user.findOne({
            email: response.email
          })
          .exec()
          .then(result => {
            console.log('masuk')
            res.status(201).json({
              response,
              result
            })
          }).catch(err => {
            console.log('errorrr')
          })

      }
    })
  },
  getAll: (req, res) => {
    User.find()
      .then(data => {
        res.status(200).json({
          message: `All User Data`,
          data: data
        })
      })
      .catch(err => {
        res.status(500).json({
          message: `Error`
        })
      })
  },
  register: (req, res) => {}
}
