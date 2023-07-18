
import mongoose from "mongoose";


export const connectDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URI as string,{
            dbName:'user'
        })
        console.log("DB connection established");
        
    } catch (error) {
        console.log("Failed to connect to MongoDB");
        
    }
}
