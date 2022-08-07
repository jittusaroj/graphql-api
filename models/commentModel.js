import mongoose  from "mongoose";
const commentSchema= new mongoose.Schema({
    commentID:String,
    comment:String,
    author:String,
    post:String
},{timestamps:true})
const commentModel=mongoose.model('comment',commentSchema)
export default commentModel