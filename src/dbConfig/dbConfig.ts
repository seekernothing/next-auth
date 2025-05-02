import mongoose from "mongoose";

export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection
        connection.on("connected",()=>{
            console.log("Mongo db connected successfully");
            
        })

        connection.on("error",(error)=>{
            console.log("Mongo db connection error, please check your mongo db connection" + error)
        })
        process.exit()
    } catch (error) {
        console.log("Something went wrong:" + error)
    }
}