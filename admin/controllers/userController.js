const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");


const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "1d" });
};

// login user

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    // creating web token
    const token = createToken(user._id);

    // user is passed back as a token
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// signup user

const signupUser = async (req, res) => {
  const { userName, email, password, studentID, contactNum, department, year } =
    req.body;
  try {
    const user = await User.signup(userName, email, password, studentID, contactNum, department, year);

    // creating web token
    const token = createToken(user._id);

    // user is passed back as a token
    res.status(200).json({
      userName,
      email,
      studentID,
      contactNum,
      department,
      year,
      token,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getSingleUser = async (req, res) => {
  const { id } = req.params;
  // const { id } = req.user._id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such user found!" });
  }
  const singleUser = await User.findById({_id: id}).populate("_id");


  if (!singleUser) {
    return res.status(404).json({ error: "User not available!" });
  }

  res.status(200).json(singleUser);
};

module.exports = {
  loginUser,
  signupUser,
  getSingleUser,
  // createInfo
};
