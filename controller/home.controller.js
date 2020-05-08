const mongoose = require("mongoose");
const { categorys}=require("../config/config");

exports.getHome = (req,res,next)=>{
 
    res.render("index",{
        pageTitle:"Home",
        isUser:req.session.uid,
        isAdmin: req.session.isAdmin,
        categorys
       
    })
}