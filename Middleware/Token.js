import jwt from "jsonwebtoken"
export const tokenchecker =(req,res,next)=>{
    try {     
        let token  = req.headers.cookie.split("=")[1];
        if("cookie" in req.headers){
         let decode = jwt.verify(token,process.env.SECRET_KEY)
           console.log(decode)
           req.email = decode.email
           next()   
        }else{
         res.status(400).json({
            status: "Fail",
            message: `Error: Token not found`
        })
        }
    } catch (error) {
         res.status(400).json({
            status: "Fail",
            message: `Error: ${error.message}`
        })
    }
}   