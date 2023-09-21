const mongoose = require('mongoose');

// const AVATAR_PATH = path.join ('/uploads/users/avatars');

const cart = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    content: {
        type: String,
        require: true
    }
}, {
    timestamps: true
});

const Cart = mongoose.model('Cart', cart);
module.exports = Cart;