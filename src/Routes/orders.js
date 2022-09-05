const express = require('express');
const orderController = require('../Controllers/orderController');
const router = express.Router();


router.get('/', orderController.getAllOrders)
router.post('/', orderController.postOrder)
module.exports = router;
