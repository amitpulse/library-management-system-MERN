const mongoose = require("mongoose");


const uploadSchema = mongoose.Schema({

  image:{
    data: Buffer,
    contentType: String,
  }
});


const Upload = new mongoose.model("upload", uploadSchema)


module.exports = Upload