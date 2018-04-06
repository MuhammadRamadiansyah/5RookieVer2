const mongoose = require('mongoose')
const Schema = mongoose.Schema

let teamSChema = new mongoose.Schema({
    teamName: {
        type: String,
        required: [true, 'name cannot be empty']
    },
    captain: {
        type: String, //e.g: 1,2,3,4,5
        // required: [true, 'position cannot be empty']
    },
    teamMember: [{
        type: Schema.Types.ObjectId,
        ref: "Users"
    }]
},{
    timestamps: true
})

let Team = mongoose.model('Teams', teamSChema)

module.exports = Team
