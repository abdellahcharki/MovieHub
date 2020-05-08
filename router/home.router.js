const router = require("express").Router();
const {getHome }= require('../controller/home.controller');





router.get("/" , getHome )



module.exports = router;