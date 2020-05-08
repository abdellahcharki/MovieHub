const mongoose = require("mongoose");
const {db, User}=require("../config/config");
const bcrypt = require("bcrypt")


exports.addUser=({name,email,password})=>{
    return new Promise((resolve , reject )=>{
        mongoose.connect(db, { useUnifiedTopology: true ,useNewUrlParser: true }).then(()=>{
            User.findOne({email}).then((user)=>{
                if(user){
                    reject("email exist");
                    mongoose.disconnect;
                } else  bcrypt.hash(password,10).then(hashPassword =>{
                    let newUser = new User({name,email,password:hashPassword});
                    newUser.save(()=>{
                        mongoose.disconnect();
                        resolve("user added");
                    })
                })
            })
         })
    })
}

exports.logUser=({email,password})=>{
    return new Promise((resolve , reject )=>{
        mongoose.connect(db, { useUnifiedTopology: true ,useNewUrlParser: true }).then(()=>{
            User.findOne({email}).then((user)=>{
                if(!user) {
                    reject("email err");
                    mongoose.disconnect();
                } else{
                    bcrypt.compare(password,user.password).then((comp)=>{
                        if(!comp) reject("password err");
                        else resolve(user);
                        mongoose.disconnect()

                    })
                }
            })
        })

    })

}