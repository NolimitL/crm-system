const express = require('express');
const router = express.Router();
const constroller = require('../controllers/order');

router.get('/', constroller.getAll);
router.post('/', constroller.create);

module.exports = router