const express = require('express');
const Users=require('../models/User');
const userRouter = express.Router().use(express.json());

userRouter.get('/',(req,res)=>{

    Users.find({})
    .then((users)=>res.json(users))
    .catch((err)=>res.json(err))
})
userRouter.post('/',(req, res)=>{
    Users.create(req.body)
    .then((users)=>res.json(users))
    .catch((err)=>res.json(err))
})
userRouter.route('/:userId')
.get((req, res)=>{
    Users.findById(req.params.userId)
    .then((user)=>res.json(user))
    .catch((err)=>res.json(err))
})
.put((req, res)=>{
    Users.findByIdAndUpdate(req.params.userId,req.body)
    .then((user)=>res.json(user))
    .catch((err)=>res.json(err))
})

.delete((req, res)=>{Users.findByIdAndDelete(req.params.userId)
    .then((users)=>res.json(users))
    .catch((err)=>res.json(err))
})

module.exports = userRouter;
