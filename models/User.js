const mongoose = require('mongoose');
//creating schema
const User = new mongoose.Schema({

    name:{
        type:String,required:true
    },
    mobileNo:{
        type:Number,required:true
    },
    city:{
        type:String,required:true
    }
})
module.exports=mongoose.model('User',User) // To model