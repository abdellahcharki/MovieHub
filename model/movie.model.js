const mongoose = require("mongoose");
const {db,Film} = require("../config/config");

exports.findFilm=(mid)=>{
    return new Promise((resolve , reject )=>{
        mongoose.connect(db, { useUnifiedTopology: true ,useNewUrlParser: true }).then(()=>{
            Film.findById(mid).then((film)=>{
                mongoose.disconnect();
                resolve(film);
            }).catch(()=>{
                reject();mongoose.disconnect();
            })
        })
    })
}