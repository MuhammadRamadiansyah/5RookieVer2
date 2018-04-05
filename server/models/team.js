const mongoose = require('mongoose')

let teamSChema = mongoose.Schema({
    teamName: {
        type: String,
        required: [true, 'name cannot be empty']
    },
    captain: {
        type: String, //e.g: 1,2,3,4,5
        required: [true, 'position cannot be empty']
    },
    teamMember: [{ 
        type: Schema.Types.ObjectId,
        ref: "users"
    }]

},{
    timestamps: true
})

let team = mongoose.model('teams', userSchema)

module.exports = team