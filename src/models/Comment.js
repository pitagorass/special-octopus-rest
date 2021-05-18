const { json } = require('body-parser');
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    
    postId: {
        type: Number,
        required: true,
        min: 6,
        max: 255
    },
    id: {
        type: Number,
        required: true,
        min: 6,
        max: 1024
    },
    name: {
        type: String,
        required: true,
        minlength: 6
    },
    email: {
        type: String,
        required: true,
        minlength: 6
    },
    body: {
        type: String,
        required: true,
        minlength: 6
    } 
})

module.exports = mongoose.model('Comment', userSchema);

