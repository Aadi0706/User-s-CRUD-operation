
const mongoose= require('mongoose');

const userSchema = new mongoose.Schema({

    Name: {type:String, required:true},
    mobile: {type:Number, required:true},
    city: {type:String, required:true},
    Address: {type:String, required:true}
    
   
});

const User= mongoose.model('User',userSchema);

export default User;
