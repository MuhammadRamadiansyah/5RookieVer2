const mongoose = require('mongoose')
const Schema  = mongoose.Schema

let invitationSchema = new Schema({
    teamId: { 
        type: Schema.Types.ObjectId,
        ref: "teams"
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    status: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

let invitation = mongoose.model('invitations', invitationSchema)

module.exports = invitation