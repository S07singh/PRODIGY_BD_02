const mongoose = require('mongoose');
const validator = require('validator');
const { v4: uuidv4 } = require('uuid');

const userSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuidv4
    },
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: validator.isEmail,
            message: 'Invalid email format'
        }
    },
    age: {
    type: Number,
    required: [true, 'Age is required'],
    validate: {
        validator: function(value) {
            return value > 0 && value < 150;
        },
        message: 'Age must be between 1 and 149'
    }
}
}, {
    timestamps: true
});

module.exports  = mongoose.model('User', userSchema);
