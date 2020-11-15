const express = require('express');
const router = express.Router();
const constroller = require('../controllers/position');

router.get('/:categoryId', constroller.getByCategoryId);
router.post('/', constroller.create);
router.patch('/:id', constroller.update);
router.delete('/:id', constroller.remove);

module.exports = router