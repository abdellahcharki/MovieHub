const router = require("express").Router();
const {getAdmin} = require("../controller/admin.controller");
const {isAdmin} = require("./gards/auth.gard");


router.get("/",isAdmin, getAdmin);

module.exports = router;