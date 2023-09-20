const mongoose = require('mongoose');

// const AVATAR_PATH = path.join ('/uploads/users/avatars');

const user = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    conform_password: {
        type: String
    },
}, {
    timestamps: true
});

const User = mongoose.model('User', user);
module.exports = User;