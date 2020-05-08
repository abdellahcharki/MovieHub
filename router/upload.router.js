const router = require("express").Router();
const {getUpload, postUpload} = require("../controller/upload.controller");
const {isAdmin}=require("./gards/auth.gard");
const multer = require("multer");


const multerUploader = multer({storage:multer.diskStorage({
    destination:(req,files,collback)=>{collback(null,"filmes");},
    filename:(req,files,collback)=>{collback(null,Date.now()+"-film-"+files.originalname)}
})}).fields([{name:'film',maxCount:1},{name:'image',maxCount:1}])




router.get("/",isAdmin,getUpload)
router.post("/",isAdmin,multerUploader,postUpload)





module.exports = router;