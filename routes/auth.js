const express = require('express');
const router = express.Router();
const constroller = require('../controllers/auth');

router.post('/login', constroller.login);
router.post('/register', constroller.register);

module.exports = router