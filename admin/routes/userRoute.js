const express = require('express');
const router = express.Router();
// const requireAuth = require('../middleware/requireAuth')

// user controllers
const {loginUser, signupUser } = require('../controllers/userController');

router.get('/login', loginUser)
// login route
router.post('/login', loginUser)

// registration route 
router.post('/signup', signupUser)

// router.post('/extrainfo', createInfo)

module.exports = router;