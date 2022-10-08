const express = require('express');
const router = express.Router();


const {createAdditionalInfo, getAdditionalInfo} = require('../controllers/userInfoController')


router.get('/addinfo', getAdditionalInfo)
router.post('/addinfo', createAdditionalInfo)

module.exports = router;