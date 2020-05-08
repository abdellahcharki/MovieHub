const mongoose = require("mongoose");
const {db, Contact }=require("../config/config");


exports.sendContct=({msg,name,subject,email})=>{
    return new Promise((resolve , reject)=>{
        mongoose.connect(db, { useUnifiedTopology: true ,useNewUrlParser: true }).then(()=>{
            let contct = new Contact({msg,name,subject,email});
            contct.save(()=>{
                mongoose.disconnect();
                resolve();
            })
        }).catch(()=>{
            reject()
        })
    })

}