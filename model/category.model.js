const mongoose = require("mongoose");
const {Film,db }=require("../config/config");


exports.findMovieByCategory=(category)=>{
    return new Promise((resolve , reject)=>{
        mongoose.connect(db, { useUnifiedTopology: true ,useNewUrlParser: true }).then(()=>{
            Film.find({}).then(result=>{
                mongoose.disconnect();
                if(!result) reject();
                else resolve(result);
            })
        }).catch(()=>{
            reject()
        })
    })

}