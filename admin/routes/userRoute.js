const express = require('express');
const router = express.Router();
const multer = require('multer')

// user controllers

const {loginUser, signupUser, createAdditionalInfo, addProfileImage} = require('../controllers/userController')



// login route

router.post('/login', loginUser)

// registration route 

router.post('/signup', signupUser)

// additional info
router.post('/addinfo', createAdditionalInfo);



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/public/images')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.originalname + '-' + uniqueSuffix)
    }
})

const upload = multer({ imageStorage: storage })

router.post('/userpic', upload.single('photo'), addProfileImage);
 


module.exports = router;