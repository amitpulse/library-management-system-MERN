// SCHEMA MODEL

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    bookTitle:{
        type: String,
        required: true
    },
    authorName:{
        type: String,
        required: true

    },
    issueDate:{
        type: Date,
        default: Date.now(),
        required: true
    },
    submissionDate:{
        type: Date,
        default: Date.now()
    },
   
},{timestamps: true});

module.exports = mongoose.model('Book', bookSchema);
