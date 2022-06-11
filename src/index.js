
const express=require('express');
const app = express();
// const cors=require('cors');

const userController= require('./controllers/usercontroller');

app.use(express.json());
// app.use(cors());


app.use("/users",userController);


module.exports =app;