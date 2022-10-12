const express = require('express');
const router = express.Router();
// const requireAuth = require('../middleware/requireAuth')

// user controllers
const {loginUser, signupUser, updateAdditionalInfo} = require('../controllers/userController');

router.post('/login', loginUser)

// registration route 
router.post('/signup', signupUser)

router.patch('/login/:id', updateAdditionalInfo)
// login route

// router.post('/extrainfo', createInfo)

module.exports = router;