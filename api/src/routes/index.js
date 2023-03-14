const axios = require('axios')
const { Router } = require('express');
require('dotenv').config();
const {Productos} = require('../db')
const {getProducts} = require('../controllers/productControllers')

const router = Router();

router.get('/products', getProducts)



module.exports = router;
