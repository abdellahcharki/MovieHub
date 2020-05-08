const router = require("express").Router();
const {getCategory}=require("../controller/category.controller")

router.get("/",getCategory);



module.exports = router;