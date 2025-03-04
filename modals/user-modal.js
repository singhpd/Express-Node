const mongoose = require("mongoose")


const userSchema =  mongoose.Schema({
    Name:String,
    email:String,
    password:String,
    cart:[],
    order:[],
    contact:Number,
    picture:String

})

module.exports = mongoose.model("users",userSchema)