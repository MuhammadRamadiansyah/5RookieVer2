const mongoose = require('mongoose')
const Invitation = require('../models/invitation')

module.exports = {
  addInvite: (req, res) => {
    Invitation.create({
      teamId: req.body.teamId,
      userId: req.body.userId,
      status: 'pending'
    }, (err, invite) => {
      if (err) {
        res.status(400)
          .json({
            message: 'Create Invitation Failed',
            error: err
          })
      }
      res.status(200)
        .json({
          message: 'Create Invitation Success!!',
          data: invite
        })
    })
  },

  updateInvite: (req, res) => {
    Invitation.find({
        _id: req.params.id
      })
      .exec()
      .then((invite) => {

      })
  }

}