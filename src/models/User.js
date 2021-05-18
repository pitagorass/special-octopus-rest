const { json } = require('body-parser');
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    date: {
        type: Date,
        default: Date.now
    },
    id: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    username: {
        type: String,
        required: true,
        minlength: 6
    },
    addres: {
        type: json,
        required: true,
        street: {
            type: String,
            required: true,
            minlength: 6
        },
        city: {
            type: String,
            required: true,
            minlength: 6
        },
        zipcode: {
            type: Number,
            required: true,
            minlength: 6
        },
        geo: {
            type: json,
            required: true,
            lat: {
                type: Number,
                required: true,
                minlength: 6
            },
            lang: {
                type: Number,
                required: true,
                minlength: 6
            }
        }
    },
    phoneNumbers: {
        type: Number,
        required: true,
        min: 6,
        max: 1024
    },
    website: {
        type: Number,
        required: true,
        min: 6,
        max: 1024
    }
})


module.exports = mongoose.model('User', userSchema);
