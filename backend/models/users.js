const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;
const validator = require("validator");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//static login method
userSchema.statics.login = async function (email, password) {
  //checks that both fields are filled
  if (!email || !password) {
    throw Error("Please fill all fields");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Incorrect email");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Invalid credentials");
  }

  return user;
};

//static sign up method
userSchema.statics.signup = async function (email, password) {
  //checking that both fields are present
  if (!email || !password) {
    throw Error("Please fill all fields");
  }
  //checking that the email is valid
  if (!validator.isEmail(email)) {
    throw Error("Invalid email");
  }
  //checking that the password is valid
  if (!validator.isStrongPassword(password)) {
    throw Error("The password is not strong enough");
  }
  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });

  return user;
};

module.exports = mongoose.model("User", userSchema);
