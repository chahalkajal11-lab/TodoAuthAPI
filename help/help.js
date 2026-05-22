import jwt from "jsonwebtoken"
export const generateJWT = (user)=>{
    let token = jwt.sign({email:user.email},process.env.SECRET_KEY,
        {expiresIn:"7d"}
    );
    return token
}