import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    userID:String,
    name:String,
    email:String,
    mobile:String,
    address:String,
    password:String
},{timestamps:true})
const userModel=mongoose.model('users',userSchema)
export default userModel    