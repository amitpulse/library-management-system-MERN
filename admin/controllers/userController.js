const User = require("../models/userModel");
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
   return jwt.sign({_id}, process.env.SECRET, {expiresIn: '2d'})
}

// login user

const loginUser = async (req, res) => {

  const {email, password} = req.body

  try {
    const user = await User.login(email, password);
    
    // creating web token
    const token = createToken(user._id)

    // user is passed back as a token
    res.status(200).json({ email, token });
    
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
 
};

// signup user

const signupUser = async (req, res) => {

  const {userName, email, password, studentID, contactNum, department, year } = req.body;

  try {
    const user = await User.signup(userName, email, password, studentID, contactNum, department, year);
    
    // creating web token
    const token = createToken(user._id)

    // user is passed back as a token
    res.status(200).json({userName, email, studentID, contactNum, department, year, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

};

module.exports = {
  loginUser,
  signupUser
};
