const {getUserInfo, changProfile}=require("../model/profile.model");
const {categorys}=require("../config/config");


exports.getProfile = (req,res,next )=>{
    getUserInfo(req.session.uid).then((user)=>{
        res.render("profile",{
            pageTitle:"my Film Stor",
            isUser:req.session.uid,
            user,categorys,
            isAdmin: req.session.isAdmin
        });
    }).catch(()=>{
        res.redirect("/");
    })
  
}

exports.postEditProfilePhoto=(req,res,next)=>{
    
    changProfile(req.session.uid,req.file.filename).then(()=>{
        res.redirect("/profile")
    })
    
}