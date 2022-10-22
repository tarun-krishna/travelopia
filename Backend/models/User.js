const mongoose = require('mongoose');
const validator = require('validator');
const UserSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required: true,
            trim:true
        },
        email:{
            type: String,
            required: true,
            trim:true
        },
        country:{
            type:String,
            required: true,
            trim:true
            },
        travellers:{
            type:Number,
            required: true
        },
        budget:{
            type:Number,
            required: true
        }

    }
);
module.exports = mongoose.model('User',UserSchema);