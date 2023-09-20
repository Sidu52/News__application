require('dotenv').config();
const User = require('../models/User');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');


async function news(req, res) {
    return res.status(200).json({ message: 'User Authenticated', action: true })
}

//Register user
async function register(req, res) {
    const { username, email, password } = req.body;
    try {
        // Check if user with the same email or username already exists
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            // Hash the password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            // Create a new user
            const newUser = new User({
                username,
                email,
                password: hashedPassword,
            });
            await newUser.save();
            return res.status(201).json({ message: 'Signup successful!', action: true, user: newUser });
        }
        return res.status(200).json({ message: 'User already exists.', action: false });

    } catch (error) {
        res.status(500).json({ error: 'Internal server error.' });
    }
}

//login
async function login(req, res) {
    const { email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            const passwordMatch = await bcrypt.compare(password, existingUser.password);
            if (passwordMatch) {
                // Generate token
                const token = jwt.sign({ userId: existingUser.id }, process.env.SECRET_KEY, { expiresIn: '1h' });
                return res.status(201).json({ message: 'Login successful!', action: true, user: existingUser, token: token });
            }
        }
        return res.status(401).json({
            message: "User not found or password does not match",
        });
    } catch (err) {
        return res.status(500).json({
            message: "Error when user login",
            error: err
        });
    }
}



module.exports = { news, login, register };