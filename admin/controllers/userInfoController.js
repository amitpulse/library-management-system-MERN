const UserInfoModel = require('../models/userInfoModel');
const mongoose = require('mongoose');


// POST user info
const createUserInfo = async(req, res) => {
    try{
        const newInfo = await UserInfoModel.create(req.body);
        res.status(200).json(newInfo);
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
};


// UPDATE info

const updateUserInfo = async (req, res) => {
    const updateUserField = await UserInfoModel.findOneAndUpdate({_id: id})
}
