
const mongoose = require("mongoose");
const { db, Film}=require("../config/config");

exports.addFilm=({title,uid,hestory,category,dur=0, productdate,film,image})=>{
    return new Promise((resolve , reject)=>{
        mongoose.connect(db, { useUnifiedTopology: true ,useNewUrlParser: true }).then(()=>{
            let newFilm = new Film({
                uid,
                title,
                category,
                hestory,
                dur,
                yearProduct: productdate,
                film_url:film[0].filename,
                image_url:image[0].filename
            });





            newFilm.save(()=>{ mongoose.disconnect();resolve() })
        }).catch(()=>{
            reject();
        })
    })
}