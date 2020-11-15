const express = require('express');
const router = express.Router();
const constroller = require('../controllers/anatylics');

router.get('/overview', constroller.overview);
router.get('/analytics', constroller.analytics);

module.exports = router