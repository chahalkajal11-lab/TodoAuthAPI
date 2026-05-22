import Main from "../Module/SignUpModel.js"
import bcrypt from "bcrypt"
import { generateJWT } from "../help/help.js"
export const Login = async(req,res)=>{
    try {
      const {email,password} = req.body
      if(!email||!password){
        return res.status(400).json({
          status:"Fail",
          message:"Email and Password required"
        })
      }
      const user = await Main.findOne({email})
      if(!user){
        return res.status(400).json({
          status:"Fail",
          message:"User not found"
        })
      }

           const comparePass = await bcrypt.compare(password,user.password)
           if(!comparePass){
            return res.status(400).json({
              status:"Fail",
              message:"Incorrect password"
            })
           }
    let  token = generateJWT(user)
        console.log(token)
        res.cookie("token",token)


          res.status(200).json({
            status:"Success",
            message:`Login page `
          })
    } catch (error) {
         res.status(400).json({
            status:"Fail",
            message:`Error ${error.message}`
          })
    }
}

export const getAllUser = async (req,res)=>{
    try {
       let user = await Main.find()
       res.status(200).json({
            status: "Success",
           data:user,
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: `Error ${error.message}`
        })
    }
}
export const getSingleUser = async (req,res)=>{
    try {
        let {id} = req.params
       let user = await Main.findById(id)
       res.status(200).json({
            status: "Success",
           data:user,
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: `Error ${error.message}`
        })
    }
}