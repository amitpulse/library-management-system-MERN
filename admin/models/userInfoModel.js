const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userInfoSchema = new Schema({
    admission:{
        type: String
    },
    gender:{
        type: String
    },
    bloodGroup:{
        type: String
    },
    emergencyContact:{
        type: Number
    },
    address:{
        type: String
    }
})

const UserInfo = mongoose.model('User Info', userInfoSchema);
module.exports = UserInfo;