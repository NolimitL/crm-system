const express = require('express');
const passport = require('passport');
const upload = require('../middleware/upload');
const constroller = require('../controllers/category');
const router = express.Router();

const PROTECT = passport.authenticate('jwt', {session: false});

router.get('/', PROTECT, constroller.getAll);
router.get('/:id', PROTECT, constroller.getById);
router.delete('/:id', PROTECT, constroller.remove);
router.post('/', PROTECT, upload.single('image'), constroller.create);
router.patch('/:id', PROTECT, upload.single('image'), constroller.update);

module.exports = router