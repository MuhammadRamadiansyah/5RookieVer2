const Team = require('../models/team')


module.exports = {

getAll : function(req,res){
    
    Team.find()
    .populate('user')
    .exec().then(response=>{
        res.status(200).json({
        message : 'success get data',
        data : response  

    })
    }).catch(err=>{
        res.status(500).json({
        message : 'get data failed',
        err
          })
        })
    },

    getOne : function(req,res){
      Team.findById(req.params.id).exec().then(response=>{
        console.log(req.body);
        
        res.status(200).json({
          message : 'success get data by id',
          data : response
        })
      }).catch(err=>{
        res.status(500).json({
          message : 'get data by id failed',
          err
        })
      })
    },


add : function(req,res){

    let newTeam = new Team({
      teamName : req.body.teamName,
      // captain : req.body.captain,
      // author : req.body.author,
      // category : req.body.category,
      // stock : req.body.stock,
    })

    newTeam.save().then(response=>{
      res.status(200).json({
        message : 'success insert data',
        data : response
      })
    }).catch(err=>{
      res.status(500).json({
        message : 'insert error',
        err
      })
    })
  }

}