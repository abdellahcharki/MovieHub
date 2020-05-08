
exports.isUser= (req,res,next ) =>{
    if(req.session.uid) next();
    else res.redirect("/login"); 
}
exports.isNotUser= (req,res,next ) =>{
    if(req.session.uid)  res.redirect("/");
    else next(); 
}

exports.isAdmin = (req,res,next)=>{
    let {isAdmin} = req.session;
    if(isAdmin) next();
    else res.redirect("/login")

}