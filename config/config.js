import mongoose from "mongoose";
 export const dbConnect = async()=>{
    try {
        await mongoose.connect(process.env.ATLAS_URL)
        console.log("Database Connected......")
    } catch (error) {
         console.log(error)  
     }
    }
 