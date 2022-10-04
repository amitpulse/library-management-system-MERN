const express = require('express');
const router = express.Router();

// user controllers

const {loginUser, signupUser} = require('../controllers/userController')

// login route

router.post('/login', loginUser)

// registration route 

router.post('/signup', signupUser)




module.exports = router;