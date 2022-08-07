import jwt from "jsonwebtoken";
export const createToken=(user)=>{
    return jwt.sign(user, process.env.SECRET_KEY,{expiresIn:"30 days" })    
}