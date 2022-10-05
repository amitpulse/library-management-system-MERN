const express = require('express');
const router = express.Router();
const multer = require('multer')


const {createAdditionalInfo, addProfileImage} = require('../controllers/userInfoController')


// require for user auth
// router.use(requireAuth);


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

// additional info
router.post('/addinfo', createAdditionalInfo);

module.exports = router;