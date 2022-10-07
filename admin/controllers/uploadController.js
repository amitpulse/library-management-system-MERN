const uploadModel = require("../models/uploadModel");
const multer = require("multer");

//Storing image in folder in folder
const Storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, callback)=>{
        callback(null, file.originalname)
    }
})

const getImage = async (req, res) =>{
    res.send("hello")
}

const postImage = async (req, res) =>{
    upload(req,res, (err)=>{
        if(err){
            console.log(err);
        }else{
            const newImage = new uploadModel({
                image : {
                    data: req.file.filename,
                    contentType: "image/png"
                }
            })
            newImage.save()
            .then(()=>{
                res.send("Successfully uploaded!")
            })
            .catch((err)=>{
               console.log(err);
            })
        }
    })
}

const upload = multer({storage:Storage}).single('testImage')


module.exports = {
    getImage,
    postImage,
    upload
}
