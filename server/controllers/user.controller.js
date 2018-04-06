const User = require('../models/user')

module.exports = {
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
  register: (req, res) => {
    let obj = {

    }
    console.log(req.body)
  }
}
