const {addUser , logUser}=require("../model/auth.model");
const validationResult = require("express-validator").validationResult;


exports.getLogIn = (req,res,next)=>{
    res.render("login",{
        pageTitle:"Log in ",
        isUser:req.session.uid,
        isAdmin: req.session.isAdmin
    })
}

exports.postLogIn = (req,res,next)=>{
    
    logUser(req.body).then((user)=>{
    req.session.uid=user._id;
    req.session.isAdmin = user.isAdmin;
    res.redirect("/");
    }).catch((err)=>{
        console.log(err);
        res.redirect("/login");
    })
}


exports.getSingUp = (req,res,next)=>{
    
    res.render("singup",{
        pageTitle:"Sing Up",
        isUser:req.session.uid,
        isAdmin: req.session.isAdmin
    })
}
exports.postSingUp = (req,res,next)=>{
   let  validtionRsult = validationResult(req);
    if(validtionRsult.isEmpty()){
        addUser(req.body).then((result)=>{
            console.log(result);
            res.redirect("/login");
        }).catch((err)=>{
            res.redirect("/singup");
        })
    }else{
       // req.flash("validationErrore",validtionRsult.array());
        res.redirect("/singup");
    }
   

}
exports.logOut = (req,res,next)=>{
    req.session.destroy(()=>{
        res.redirect("/")
    });
}