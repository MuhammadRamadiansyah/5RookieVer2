const FB = require('fb')
FB.setAccessToken('access_token');
var accessToken = FB.getAccessToken();
const jwt = require('jsonwebtoken')
const secretKey = process.env.rahasia
const user = require('../models/user')
const invitation = require('../models/invitation')
const team = require('../models/team')


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

        });
    },
    register: function(req, res){
        
   
        let secretKey = process.env.rahasia
        let token = req.headers.token
       
        jwt.verify(token, secretKey, function(err, decoded) {
            if(err){
                console.log('err')
            }else{
                let newData = {
                    name: decoded.name,
                    position: req.body.position,
                    dotaId: req.body.dotaId,
                    email: decoded.email,
                }
                let newUser = new user(newData)
                newUser.save()
                        .then(newUser=>{
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

        let token = req.headers.token
        let secretKey = process.env.rahasia
        
        jwt.verify(token, secretKey, function(err, response) {
            if(err){
                console.log(err)
            }else{
                user.findOne({email: response.email})
                    .exec()
                    .then(result=>{  
                        console.log(result)
                        res.status(201).json({
                            response,
                            result
                        })
                    }).catch(err=>{
                        console.log('errorrr')
                    })
                
            }  
        })
    },
    getNotification: function(req, res){

        let getId = req.params.id

        // var newUserId = mongoose.Types.ObjectId('5ac6eeacb116410fb425b9d0');
        // var newTeamId = mongoose.Types.ObjectId('5ac715b55ef2371c60af9316')
        // let newInvitiation = new invitation()
        // let newInv = {
        //     userId: newUserId,
        //     teamId: newTeamId,
        //     status: 'pending'
        // }

        // let newInvitation = new invitation(newInv)
        // newInvitation.save()
        //              .then(datas=>{
        //                 console.log(datas,'----------->')
        //                 res.status(200).json({
        //                   datas
        //               })
        //              })
        //              .catch(err=>{
        //                  console.log(err)
        //              })
    
        invitation.find({userId: getId, status: 'pending'})
                  .populate('teamId')
                  .exec()
                  .then(function(datas){
                      console.log(datas,'----------->')
                      res.status(200).json({
                          datas
                      })
                  })
                  .catch(err=>{
                      console.log(err)
                  })
                  
    },
    accept: function(req, res){

        let getId = req.params.id
        let updateData = {
            status: 'accept'
        }
        invitation.findOneAndUpdate({_id: getId}, updateData)
                  .exec()
                  .then(success=>{
   
                    let newData = {
                        $push: {teamMember: success.userId}
                    }
                    team.findOneAndUpdate({_id: success.teamId}, newData)
                        .then(result=>{
                            res.status(200).json({
                                success
                            })
                        })
                  })
    },
    reject: function(req, res){

        let getId = req.params.id
        let updateData = {
            status: 'reject'
        }
        invitation.findOneAndUpdate({_id: getId}, updateData)
                  .exec()
                  .then(success=>{
                    res.status(200).json({
                        success
                    })
                  })
    },
    


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
