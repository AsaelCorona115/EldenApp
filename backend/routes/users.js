const express = require("express");

const { loginUser, signupUser } = require("../controllers/userControllers");
const router = express.Router();

//loginRoute
router.post("/login", loginUser);
//signupRoute
router.post("/signup", signupUser);

module.exports = router;
