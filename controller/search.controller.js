const {searchByQuery}=require("../model/search.model");

exports.getSerach = (req,res,next)=>{
    const  {query}= req.query;
    // search by query --> query
    
    console.log(query)
    if(query == "") {res.redirect("/");return;}
    else{
        searchByQuery(query).then((result)=>{})
    }
    res.render("search",{
        pageTitle:"Search",
        query,
        isUser:req.session.uid,
        isAdmin: req.session.isAdmin
    })
}