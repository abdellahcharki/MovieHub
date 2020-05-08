const router = require("express").Router();
const {getContctUs , postContctUs}=require("../controller/contctus.controller");




router.get("/", getContctUs )


router.post("/", postContctUs )

module.exports = router;