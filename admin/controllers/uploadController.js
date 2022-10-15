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

const getImage = async (req, res) =>{

res.send("got the image")
}

const postImage = async (req, res) => {
    
        const profilePic = new uploadModel({
            testImage : {
            data: req.file.filename,
            contentType: "image/png"
        }});
    
        profilePic.save()
               .then(() => res.json('Photo Added'))
               .catch(err => res.status(400).json('Error: ' + err));
    }

const upload = multer({ storage, fileFilter }).single('photo')
console.log(upload);


module.exports = {
    getImage,
    postImage,
    upload
}
