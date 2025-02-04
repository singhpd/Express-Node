const mongoose = require("mongoose")


const ownerSchema =  mongoose.Schema({
    Name:String,
    email:String,
    password:String,
    products:[],
    picture:String,
    gstin:String

})

module.exports = mongoose.model("owner",ownerSchema)