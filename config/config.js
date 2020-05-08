const mongoose = require("mongoose");

exports.db = "mongodb://localhost:27017/filmes"

exports.categorys=['comedie','documentaire','anim','carton','fantasy','politique' ,'dramatique','criminel','action'];




/*
Production
exports.Film = mongoose.model("film",mongoose.Schema({
    uid:String,
    title:String,
    Lang:String,
    hestory:String,
    category:Array,
    dur:{type:Number,default:0},
    rroductYear:Date,
    film_url:String,
    image_url:String,
    viwes:{type:Number,default:0},
    downlod:{type:Number,default:0},
    start:{type:Number,default:0},
    _start:{type:Number,default:0},
    timestemp:{type:Date,default:Date.now()}
}));
*/

exports.Film = mongoose.model("film",mongoose.Schema({
    uid:String,
    title:String,
    Lang:{type:String,default:"Franch"},
    hestory:String,
    category:Array,
    dur:{type:Number,default:0},
    productYear:Date,
    film_url:String,
    image_url:String,
    viwes:{type:Number,default:0},
    downlod:{type:Number,default:0},
    start:{type:Number,default:0},
    _start:{type:Number,default:0},
    timestemp:{type:Date,default:Date.now()}
}));



exports.User = mongoose.model("user",mongoose.Schema({
    name:String,
    email:String,
    password:String,
    profilePhoto:{type:String , default:"img/default.png"},
    disc:{type:String,default:""},
    isAdmin:{type:Boolean,default:false},
    singUpDate:{type:Date,default:Date.now()},
    lastLogIn:Date
}));

exports.Contact = mongoose.model("contct",mongoose.Schema({
    name:String,
    email:String,
    subject:String,
    message:String,
    timestemp:{type:Date,default:Date.now()}
    
}));

exports.PORT = process.env.PORT||3000;