const router = require("express").Router();
const {getProfile,postEditProfilePhoto}=require("../controller/profile.controller");
const {isUser}=require("./gards/auth.gard");
const multer = require("multer");


router.get("/",isUser, getProfile);

router.post("/",isUser, multer({storage:multer.diskStorage({
    destination:(req,files,collback)=>{
        collback(null,"profiles");
    },
    filename:(req,files,collback)=>{
        collback(null,Date.now()+"-movie-hub-"+files.originalname)
    }
})}).single("profileImgEdit")
,postEditProfilePhoto)






module.exports = router;