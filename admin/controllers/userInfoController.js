
const UserInfo = require('../models/profileModel')


// addditional user input

const createAdditionalInfo = async (req, res) => {
  
    // const photo = req.file.photo;
    const {admission, gender, bloodGroup, emergencyContact, address} = req.body;
  
    try{
      const newUserInfo = await UserInfo.create({admission, gender, bloodGroup, emergencyContact, address})

      res.status(200).json(newUserInfo);
    }
    catch(error){
      res.status(400).json({error: error.message})
    }
  };
  

  
  module.exports = {
    createAdditionalInfo

  }