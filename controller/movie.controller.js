const {findFilm}=require("../model/movie.model");

exports.getMovie = (req,res,next)=>{
    findFilm(req.query.mid).then(film=>{
        if(film)  res.render("movie",{
                pageTitle:"Movie Info",
                isUser:req.session.uid,
                isAdmin: req.session.isAdmin,
                film
                });
        else res.redirect("/");
    }).catch(()=>{
        res.redirect("/");
    })
 

}