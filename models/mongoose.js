const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/userdb')
.then(()=>console.log('Connected Correctly'))
.catch((err)=>console.log(err))

module.exports=mongoose;