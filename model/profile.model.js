const mongoose = require("mongoose");
const { User , db, Film}=require("../config/config");


exports.getUserInfo=(uid)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(db, { useUnifiedTopology: true ,useNewUrlParser: true }).then(()=>{
        User.findOne({_id:uid}).then((user)=>{
            mongoose.disconnect();
            if(user)  resolve(user)
            else reject();
        }).catch(()=>{
            mongoose.disconnect()
            resolve();
        })
        })
    })
}

exports.changProfile=(uid,img)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(db, { useUnifiedTopology: true ,useNewUrlParser: true }).then(()=>{
            User.findById(uid).then((user)=>{
                user.profilePhoto=img;
                user.save(()=>{
                    mongoose.disconnect();
                    resolve()
                })
            })
        })
    })
}
