const express = require('express');
const userRouter = require('./routes/userRouter');
const connect = require('./models/mongoose');
const app = express().use(express.json());
app.use('/users',userRouter);
app.listen(3000,()=>console.log('Server Running'));


