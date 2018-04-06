const Team = require('../models/team')

module.exports = {

  getAll: function(req, res) {

    Team.find()
      .populate('user')
      .exec().then(response => {
        res.status(200).json({
          message: 'success get data',
          data: response
        })
      }).catch(err => {
        res.status(500).json({
          message: 'get data failed',
          err
        })
      })
  },


  add: function(req, res) {

    let newTeam = new Team({
      teamName: req.body.teamName,
      captain: req.body.captain,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock,
    })

    Team.save().then(response => {
      res.status(200).json({
        message: 'success insert data',
        data: response
      })
    }).catch(err => {
      res.status(500).json({
        message: 'insert error',
        err
      })
    })
  }

}