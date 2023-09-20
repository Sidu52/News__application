const express = require('express');
const router = express.Router();
const auth = require('../config/auth');

const {  login, register, news} = require('../controllers/userController');
router.get('/', auth, news);
router.post('/signin', login);
router.post('/register', register);

module.exports = router;