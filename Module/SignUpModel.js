import mongoose from "mongoose";

const user = mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        age:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        contactNo:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        image:{
            type:String,
            required:null
        },
    }
)
const Main = mongoose.model("Main",user)
export default Main