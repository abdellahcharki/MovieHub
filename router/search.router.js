const router = require("express").Router();
const {getSerach}=require("../controller/search.controller");
router.get("/",getSerach)


module.exports = router;