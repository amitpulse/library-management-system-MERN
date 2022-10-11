
const mongoose = require('mongoose');
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

  // update user info
  const updateAdditionalInfo = async (req, res) => {
    const {id} = req.params;
    // const user_id = req.user._id;
    if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({ error: "No additional user info available." });
    }
    const updateUserInfo = await UserInfo.findOneAndUpdate ({_id: id}, { ...req.body}, {new: true})
    // const updateUserInfo = await UserInfo.findOneAndUpdate({id: user_id}, { ...req.body})

    if(!updateUserInfo){
    return res.status(404).json({ error: "No pervious info available." });

    }

    res.status(200).json(updateUserInfo);
  };
  

  
  module.exports = {
    createAdditionalInfo,
    getAdditionalInfo,
    updateAdditionalInfo
  }