import express from "express"
import { dbConnect } from "./config/config.js";
import dotenv from "dotenv"
import TodoRouter from "./Routes/TodoRoutes.js";
import { SignUpController } from "./Controller/SignUpController.js";
import { Login } from "./Controller/LoginController.js";
import cookieParser from "cookie-parser";
const app = express()
app.use(express.json())
app.use(cookieParser())

dotenv.config()
app.use("/api/v1", TodoRouter)



TodoRouter.post("/signup", SignUpController);
TodoRouter.post("/login", Login);
const port = process.env.PORT || 4567

app.get("/", (req, res) => {
  res.send("Auth API is running in this project.....");
});

app.listen(port,(req,res)=>{
    console.log(`Server run on URL:http://localhost:${port}`)
    dbConnect()
})