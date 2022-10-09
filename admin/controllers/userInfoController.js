
const UserInfo = require('../models/profileModel')



// GET additonal user info
const getAdditionalInfo = async (req, res) => {

  const user_id = req.user._id
  const getExtraInfo = await UserInfo.find({user_id}).sort({ createdAt: -1});
  res.status(200).json(getExtraInfo);
};



//POST addditional user input

const createAdditionalInfo = async (req, res) => {

    const {admission, gender, bloodGroup, emergencyContact, address} = req.body;
    try{
    const user_id = req.user._id;
      const newUserInfo = await UserInfo.create({admission, gender, bloodGroup, emergencyContact, address, user_id})
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