const express = require('express');
const router = express.Router();
const auth = require('../config/auth');

const { login, register, news, savedPost, getNews, deleteNews } = require('../controllers/userController');
router.get('/', auth, news);
router.post('/signin', login);
router.post('/register', register);
router.post('/cart', savedPost);
router.get('/getNews', auth, getNews);
router.post('/newsDelete', auth, deleteNews);

module.exports = router;