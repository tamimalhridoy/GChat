const userSchema = require("../models/userSchema");


const registration = (req, res) => {
  const { fullName, email, password, avatar } = req.body;
};

const user = new userSchema({
  fullName,
  email,
  password,
  avatar,
});

user.

module.exports = { registration };
