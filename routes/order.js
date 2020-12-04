const express = require('express');
const passport = require('passport');
const router = express.Router();
const constroller = require('../controllers/order');

const PROTECT = passport.authenticate('jwt', {session: false});

router.get('/', PROTECT, constroller.getAll);
router.post('/', PROTECT, constroller.create);

module.exports = router