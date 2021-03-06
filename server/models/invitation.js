const mongoose = require('mongoose')
const Schema  = mongoose.Schema

let invitationSchema = new Schema({
    teamId: {
        type: Schema.Types.ObjectId,
        ref: "Teams"
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "Users"
    },
    status: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

let invitation = mongoose.model('Invitations', invitationSchema)

module.exports = invitation