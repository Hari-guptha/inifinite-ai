const mongoose =require('mongoose')
const schema=mongoose.Schema
const loguser=new schema({

    enrollno:{
        type:String,
        required:false
    },
    name:
    {
    type:String,
    required:false},

    time:{type:Date},

    status: {
        type:String,
        required:false}
})
const log=mongoose.model('logusers',loguser)
module.exports=log