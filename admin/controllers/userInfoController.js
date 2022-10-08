
const UserInfo = require('../models/profileModel')



// GET additonal user info
const getAdditionalInfo = async (req, res) => {

  const getExtraInfo = await UserInfo.find().sort({ createdAt: -1});
  res.status(200).json(getExtraInfo);
};



//POST addditional user input

const createAdditionalInfo = async (req, res) => {

    const {admission, gender, bloodGroup, emergencyContact, address} = req.body;
    try{
    // const user_id = req.user._id;
      const newUserInfo = await UserInfo.create({admission, gender, bloodGroup, emergencyContact, address})
      res.status(200).json(newUserInfo);
    }
    catch(error){
      res.status(400).json({error: error.message})
    }
  };
  

  
  module.exports = {
    createAdditionalInfo,
    getAdditionalInfo
  }