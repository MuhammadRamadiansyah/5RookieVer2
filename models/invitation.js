const mongoose = require('mongoose')

let invitationSchema = mongoose.Schema({
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

let invitation = mongoose.model('inivtations', userSchema)

module.exports = invitation