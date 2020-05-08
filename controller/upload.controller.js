const {categorys}=require("../config/config");

const {addFilm}=require("../model/upload.model");




exports.getUpload =(req,res,next)=>{
    res.render("upload",{
        pageTitle:"Upload",
        isUser:req.session.uid,
        isAdmin: req.session.isAdmin,
        categorys
    })
}
exports.postUpload = (req,res,next)=>{
    const {image ,film } = req.files;
    const data = {...req.body,  ...{image , film }}
   // console.log(data)
    addFilm(data).then(()=>{
        res.redirect("/profile");
    })
}