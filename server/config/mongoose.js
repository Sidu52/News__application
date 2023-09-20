require('dotenv').config()
const mongoose = require('mongoose');
const Url = process.env.MONGO_URL;

mongoose.connect(Url);// Connect mongoose using URL
const db = mongoose.connection;
db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', () => {
    console.log("Connected to Database :: MongoDB ")
});

module.exports = db;