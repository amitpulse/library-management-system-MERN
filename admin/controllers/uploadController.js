const uploadModel = require("../models/uploadModel");
const multer = require("multer");
const path = require('path');

//Storing image in folder in folder
const storage = multer.diskStorage({
    destination: function(req, res, cb) {
        cb(null, 'uploads');
    },
    filename: function(req, file, cb) {   
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

// ----------- UPLOAD IMAGE -------------
const postImage = async (req, res) => {
    
        const profilePic = new uploadModel({
            testImage : {
            data: req.file.filename,
            contentType: "image/png"
        }});
    
        profilePic.save()
               .then(() => res.json('Photo Uploaded'))
               .catch(err => res.status(400).json('Error: ' + err));
    }

const upload = multer({ storage, fileFilter }).single('photo')
console.log(upload);

// ---------------------- GET IMAGE ------------------------

const getImage = async (req, res) =>{

    const downloadImage = await uploadModel.find()
    res.json(downloadImage)
    // res.send("got the image")
    }
    

module.exports = {
    getImage,
    postImage,
    upload
}
