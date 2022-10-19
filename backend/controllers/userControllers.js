const userModel = require("../models/users");
const jwt = require("jsonwebtoken");

//creating a jwt
const createToken = (_id) => {
  const encoder = jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
  return encoder;
};

//login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.login(email, password);

    token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//signup
const signupUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.signup(email, password);
    //signing the token
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { loginUser, signupUser };
