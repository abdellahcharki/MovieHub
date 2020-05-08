const mongoose = require("mongoose");
const {db,Film}=require("../config/config");



exports.watchFilmById = (fid)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(db, { useUnifiedTopology: true ,useNewUrlParser: true }).then(()=>{
            Film.findById(fid).then(film=>{
               
                film.viwes++;
                film.save(()=>{
                    mongoose.disconnect();
                    resolve(film)
                })
               
            }).catch(()=>{
                reject()
                mongoose.disconnect();
            })
        })
    })
}