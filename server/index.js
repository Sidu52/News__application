require('dotenv').config();
const express = require('express');
const db = require('./config/mongoose');
const cors = require('cors');
const dotenve = require('dotenv');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
const corsOptions = {
    origin: [process.env.CORS_URL],  // Allow only requests from this domain
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set routes
app.use('/', require('./routes/user'));

//Set Server
app.listen(port, (err) => {
    if (err) {
        console.log('Error in server run:', err);
        return;
    }
    console.log('Server run successful for port', port);
});