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
        required: true
    }
});

module.exports = mongoose.model('Book', bookSchema);
