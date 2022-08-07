import mongoose from "mongoose";
const postSchema=new mongoose.Schema({
    postID:String,
    postName:String,
    postDescription:String,
    author:String,
},{timestamps:true})
const postModel=mongoose.model('post',postSchema)
export default postModel