import multer from "multer"
import crypto from "crypto"
const storage = multer.diskStorage(
    {
        destination:(req,file,cb)=>{
            cb(null,"./Uploader")
        },
        filename:(req,file,cb)=>{
            crypto.randomBytes(12,function(err,bytes){
                const comb = bytes.toString("hex")
                const fn = comb +"." + file.originalname.split(".")[1]
                cb(null,fn)
            })
        }
    }
)
const Uploader = multer({storage:storage})
export default Uploader