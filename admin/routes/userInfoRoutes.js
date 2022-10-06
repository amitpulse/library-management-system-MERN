const express = require('express');
const router = express.Router();
const multer = require('multer')
const uuid = require('uuid')
// const UserInfo = require('../models/profileModel')

const {createAdditionalInfo} = require('../controllers/userInfoController')

// const storage = multer.diskStorage({
//     destination:  (req, file, cb) => {
//       cb(null, '..images')
//     },
//     filename: (req, file, cb) => {
//         const uniqueSuffix = uuid.v4()  + '-' + Date.now();
//         cb(null, file.originalname + '-' + uniqueSuffix)
//     }
// })

// const upload = multer({ imageStorage: storage })

// router.post('/userpic', upload.single('photo'), addProfileImage);

// additional info
// router.post('/addinfo', upload.single('photo'));

router.post('/addinfo', createAdditionalInfo)

module.exports = router;