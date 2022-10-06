const express = require('express');
const router = express.Router();


const {createAdditionalInfo} = require('../controllers/userInfoController')


router.post('/addinfo', createAdditionalInfo)

module.exports = router;