const router = require("express").Router();
const check = require("express-validator").check;
const {getLogIn , getSingUp , postSingUp , postLogIn ,logOut}=require("../controller/auth.controller");
const {isNotUser , isUser} = require("./gards/auth.gard");



router.get("/login",isNotUser,getLogIn )
router.post("/login",postLogIn )

router.get("/singup",isNotUser,getSingUp )
router.post("/singup", 
check('name').notEmpty().withMessage("name is require"),
check('email').notEmpty().isEmail().withMessage("E-mail is require"),
check('password').isLength({min:6}).withMessage("password mast be greter then 6 character"),
postSingUp )

router.all("/logout",isUser,logOut )

module.exports = router;