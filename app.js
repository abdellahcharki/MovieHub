const express = require("express");
const bodyParser = require("body-parser").urlencoded({ extended: true });
const path = require("path");
const { PORT, db } = require("./config/config");
const session = require("express-session");
const SessionStor = require("connect-mongodb-session")(session);

let STOR = new SessionStor({
    uri: db,
    collection: "session"
});

//routers
const homeRouter = require("./router/home.router");
const authRouter = require("./router/auth.router");
const watchRouter = require("./router/watch.router");
const contctUsRouter = require("./router/contctus.router");
const searchRouter = require("./router/search.router");
const profileRouter = require("./router/profile.rouer");
const adminRouter = require("./router/admin.router");
const movieRouter = require("./router/movie.router");
const uploadRouter = require("./router/upload.router");
const categoryRouter = require("./router/category.router");
// express app
const app = express();

// app config 
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "filmes")));
app.use(express.static(path.join(__dirname, "profiles")));
app.use(bodyParser);
app.use(session({
    store: STOR,
    saveUninitialized: false,
    resave: true,
    //  saveUninitialized: true,
    cookie: { maxAge: 1000000000 },
    secret: "herl jhekjfh weilfh   i uwuierfhjkwe hnsdjkc silue pfiouq hwoiygzvucawyei"
}));
app.set("views", "views");
app.set("view engine", "ejs");


//=============================
/*
const mysql = require("mysql");
const conx =  mysql.createConnection({
    host:"localhost",
    database:"abdou",
    user:"root",
    password:""
})

app.use((req, res, next) => {
    conx.query("select * from x ",(err,ress)=>{
        console.log(ress[1].name)
    })

})

*/


// routers use 
app.use("/", homeRouter);
app.use("/watch", watchRouter);
app.use("/", authRouter);
app.use("/contctus", contctUsRouter);
app.use("/search", searchRouter);
app.use("/movie", movieRouter);
app.use("/profile", profileRouter);
app.use("/admin", adminRouter);
app.use("/upload", uploadRouter);
app.use("/category", categoryRouter);
//app.use("/mylib",mylibRouter);
//app.use("/movies",moviesRouter);


//server
app.listen(PORT, () => console.log("server run on port ", PORT));