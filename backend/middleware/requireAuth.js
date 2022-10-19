//Imports
const jwt = require("jsonwebtoken");
const User = require("../models/users");

//Main function
const requireAuth = async (req, res, next) => {
  //verify that the user is authenticated
  const { authorization } = req.headers;

  if (!authorization) {
    return res
      .status(401)
      .json({ error: "Authorization token necessary. You shall not pass" });
  }

  const token = authorization.split(" ")[1];
  try {
    const { _id } = jwt.verify(token, process.env.SECRET);
    req.user = await User.findOne({ _id }).select("_id");
    next();
  } catch (error) {
    res
      .status(401)
      .json({ error: "You don't have the right. Oh you don't have the right" });
  }
};

module.exports = requireAuth;
