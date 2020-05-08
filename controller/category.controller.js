const {findMovieByCategory}=require("../model/category.model")
exports.getCategory=(req,res,next)=>{
    findMovieByCategory(req.query.category).then((result)=>{
        res.render("category",{
            pageTitle:req.query.category,
            isUser:req.session.uid,
            isAdmin: req.session.isAdmin,
            result
        })
    })
}