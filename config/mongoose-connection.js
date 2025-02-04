const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/scatch")
.then(()=>{
    console.log("DB CONNECTED");
    
})
.catch((err)=>{
    console.log("ERROR ==", err);
    
})

module.exports = mongoose.connection