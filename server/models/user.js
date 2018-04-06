const mongoose = require('mongoose')
const Schema = mongoose.Schema


let userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name cannot be empty']
    },
    position: {
        type: String, //e.g: 1,2,3,4,5
        required: [true, 'position cannot be empty']
    },
    email: {
        type: String,
        required: [true, 'email cannot be empty']
    },
    nickname: {
        type: String, //manual
        required: [true, 'nickname cannot be empty']
    },
    password: {
        type: String,
        required: [true, 'stock cannot be empty']
    },
    dotaId: {
        type: String,
        required: [true, 'dotaId cannot be empty'] 
    }
},{
    timestamps: true
})

let User = mongoose.model('Users', userSchema)

module.exports = User
