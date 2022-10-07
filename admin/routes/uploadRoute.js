const express = require('express');
const router = express.Router();

const {getImage, postImage, upload} = require('../controllers/uploadController')

router.get("/upload", getImage);

router.post('/upload', postImage, upload)

module.exports = router;
