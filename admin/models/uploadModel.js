const mongoose = require("mongoose");


const uploadSchema = mongoose.Schema({

  testImage:{
    data: Buffer,
    contentType: String,
  }
});


const Upload = new mongoose.model("upload", uploadSchema)


module.exports = Upload