import  express  from "express";
import dotenv from "dotenv"
import { connectDb } from "./db/index.js";
import { graphqlHTTP } from "express-graphql";
import schema from "./graphql/schema/schema.js"
import { createToken } from "./graphql/types/utils/auth.js";

dotenv.config()
connectDb()
const app=express()
// app.get('/api',(req, res)=>{
//     res.send({messag:"Hello"})
// })
// app.get('/testAuth',(req, res)=>{
//     return res.send(createToken({ name: "jitendra kumar saroj", email: "saroj222137@gmail.com" }))
// })
app.use('/api',graphqlHTTP({
    schema,
    graphiql:true
}))
app.listen(process.env.PORT,()=>{
    console.log(`Server is running at PORT ${process.env.PORT}`)
})