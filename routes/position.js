const express = require('express');
const passport = require('passport');
const router = express.Router();
const constroller = require('../controllers/position');

const PROTECT = passport.authenticate('jwt', {session: false});

router.get('/:categoryId', PROTECT, constroller.getByCategoryId);
router.post('/', PROTECT, constroller.create);
router.patch('/:id', PROTECT, constroller.update);
router.delete('/:id', PROTECT, constroller.remove);

module.exports = router