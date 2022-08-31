const express = require('express');
const router = express.Router();
const orderRoutes = require('./orders')

router.use('/order', orderRoutes)

module.exports = router;
