exports.getAdmin = (req,res,next)=>{
    res.render("dashbord",{
        pageTitle:"Dashbord",
        isUser:req.session.uid,
        isAdmin: req.session.isAdmin,
    })
}