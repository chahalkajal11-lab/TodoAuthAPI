import { cloudinaryFun } from "../Middleware/cloudinary.js";
import Main from "../Module/SignUpModel.js"
import bcrypt from  "bcrypt"
export const SignUpController = async (req, res) => {
  try {
    const { name, age, address, contactNo, password, email } = req.body;
     let image = await cloudinaryFun(req.file.path)
        console.log(req.file.path)
    if (!name || !age || !address || !contactNo || !password || !email) {
      return res.status(400).json({
        status: "Fail",
        message: "Please fill the required information"
      });
    }

    const isExist = await Main.findOne({ email });

    if (isExist) {
      return res.status(400).json({
        status: "Fail",
        message: " This user already exists"
      });
    }

    const hashPass = await bcrypt.hash(password,10)
    const user = await Main.create({
      name,
      age,
      address,
      contactNo,
      password:hashPass,
      email,
      image
    });
    

    return res.status(200).json({
      status: "Success",
      message: "Signup successful",
      data: user
    });

  } catch (error) {
    return res.status(400).json({
      status: "Fail",
      message: `Error:${error.message}`
    });
  }
};