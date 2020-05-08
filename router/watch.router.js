const router = require("express").Router();
const {getWatch}=require("../controller/watch.controller");

router.get("/:fid",getWatch)


module.exports = router;