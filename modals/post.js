const mongoose  =  require('mongoose')

const post = mongoose.Schema({
    postData:String,
    user:[
        {
            type : mongoose.Schema.ObjectId,
            ref:"productUsers"
        }
    ],
    date:{
        type:Date,
        default :Date.now
    }
})


module.exports = mongoose.model('post',post)