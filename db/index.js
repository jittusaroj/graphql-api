import mongoose from 'mongoose'

export const connectDb = async () => {
    try {
        mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Database connected")
    } catch (error) {
        console.log(error.message)
    }
}