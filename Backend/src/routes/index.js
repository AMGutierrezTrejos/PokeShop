const express = require("express");

const getUserByEmail = require("../controllers/getUserByEmail");




const router = express.Router();

router.get("/getUserByEmail", getUserByEmail);


module.exports = router