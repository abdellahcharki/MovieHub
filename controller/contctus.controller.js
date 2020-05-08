const {sendContct}=require("../model/contctus.model");
exports.getContctUs = (req , res , next )=>{
    res.render("contactus",{
        pageTitle:"contct us",
        isUser:req.session.uid,
        isAdmin: req.session.isAdmin
    })
}
exports.postContctUs = (req,res,next)=>{
    console.log(req.body);
    sendContct(req.body).then(()=>{
        res.redirect("/");
    }).catch(()=>{
        res.redirect(".contctus")

    })
}