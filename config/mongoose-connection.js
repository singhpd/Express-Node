const mongoose = require('mongoose')
const mongodbUri = require('./development.json')
const dbgr = require("debug")("development:mongoose")
const config = require("config")

mongoose.connect(`${config.get("MONDODB_URI")}/satch`)
.then(()=>{
    dbgr("DB CONNECTED");
})
.catch((err)=>{
    dbgr("ERROR ==", err);
})

module.exports = mongoose.connection