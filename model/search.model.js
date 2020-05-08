const mongoose = require("mongoose");
const { Film}=require("../config/config");

exports.searchByQuery=(query)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(db, { useUnifiedTopology: true ,useNewUrlParser: true }).then(()=>{
            mongoose.disconnect();
            for(let i of Film ) console.log(i);
        })
    })
}