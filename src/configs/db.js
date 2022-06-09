
const mongoose = require('mongoose');

const connect = ()=>{

   return mongoose.connect("mongodb+srv://Aditya07:Aditya07@user_information.so6y5.mongodb.net/user?retryWrites=true&w=majority")
}

module.exports =connect;