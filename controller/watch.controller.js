const {watchFilmById}=require("../model/watch.model");


exports.getWatch=(req,res,next)=>{
    watchFilmById(req.params.fid).then((film)=>{
        res.render("watch",{
            pageTitle:"Watch film",
            isUser:req.session.uid,
            isAdmin: req.session.isAdmin,
            film
        })
    }).catch(()=>{
        res.redirect("/")
    })
  
}