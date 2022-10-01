const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const requireAuth = async (req, res, next) => {

    //verify authentication
    const {authorization} = req.headers;
    
    if(!authorization){
        return res.status(401).json({error: 'Authorization token needed.'})  
    }

    // authorization.split requires <space></space> for tokens to split
    const token = authorization.split(' ')[1]

    try{
        const {_id} = jwt.verify(token, process.env.SECRET)
        // const {_id} = jwt.sign(token, process.env.SECRET)
        req.user = await User.findOne({_id}).select('_id')
       next()
    }
    catch(error){
        console.log(error);
        res.status(401).json({error: "Request not authorised"})
    }
}

module.exports = requireAuth;