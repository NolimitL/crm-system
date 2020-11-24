const express = require('express');
const router = express.Router();
const constroller = require('../controllers/category');
const passport = require('passport');

router.get('/', passport.authenticate('jwt', {session: false}), constroller.getAll);
router.get('/:id', constroller.getById);
router.delete('/:id', constroller.remove);
router.post('/', constroller.create);
router.patch('/:id', constroller.update);

module.exports = router