const router = require("express").Router();
const {getMovie} = require("../controller/movie.controller");

router.get("/",getMovie)

module.exports = router;