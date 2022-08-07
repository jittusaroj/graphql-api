import { GraphQLID, GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";
import postModel from "../../models/postModel.js";
import userModel from "../../models/userModel.js";
import commentModel from "../../models/commentModel.js";
export const userType=new GraphQLObjectType({
    name:"userType",
    description:"user description",
    fields:()=>({
        userID:GraphQLID,
        name: {type:GraphQLString},
        email: {type:GraphQLString},
        mobile: {type:GraphQLString},
        address: {type:GraphQLString},
        password: {type:GraphQLString},
        posts:{
            type: GraphQLList(postType),
            resolve(parent, args) {
                return postModel.findById(parent.userID)
            }
        }
    })
})
export const postType=new GraphQLObjectType({
    name:"postType",
    description:"post description",
    fields:()=>({
        postID:GraphQLID,
        postName: GraphQLString,
        postDescription: String,
        author:{
            type: userType,
            resolve(parent,args){
                return userModel.findById(parent.userID)
            }
        },
        comments:{
            type: GraphQLList(commentType),
            resolve(parent,args){
                return commentModel.findById(parent.postID)
            }
        },
        author:{
            type: userType,
            resolve(parent,args){
                return userModel.findById(parent.userID)
            }
        },
    })
})
export const commentType=new GraphQLObjectType({
    name:"commentType",
    description:"post description",
    fields:()=>({
        commentID: GraphQLID,
        comment: GraphQLString,
        author: {
            type: userType,
            resolve(parent, args) {
                return userModel.findById(parent.userID)
            }
        },
        post: {
            type: postType,
            resolve(parent, args) {
                return postModel.findById(parent.postID)
            }
        },
    })
})