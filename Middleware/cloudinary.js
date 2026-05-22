import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
import fs from "fs"
dotenv.config()
  // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key:process.env.CLOUDINARY_API_KEY, 
        api_secret:process.env.CLOUDINARY_API_SECRET 
    });

    export const cloudinaryFun = async(filePath)=>{
       try {
         if(!filePath){
           return null
         }
         let res = await cloudinary.uploader.upload(filePath)
         fs.unlinkSync(filePath)
         return res.secure_url
     } catch (error) {
        fs.unlinkSync(filePath)
        console.log(error)
     }
    }