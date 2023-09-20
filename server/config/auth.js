const jwt = require('jsonwebtoken');
require('dotenv').config();

function authentication(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(201).json({ message: 'Unauthorized', action: false });
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(201).json({ message: 'Unauthorized', action: false });
        }
        req.user = user;
        next();
    });
}

module.exports = authentication;
