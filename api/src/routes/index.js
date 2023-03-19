require('dotenv').config();
const axios = require('axios')
const { Router } = require('express');
const {allProducts, productsByName, productByCategory} = require('../controllers/productControllers')
const {createProduct} = require('../controllers/utils')

const router = Router();

router.get('/products', allProducts)

router.get('/products/:name', productsByName)

router.get('/productos/:category', productByCategory)

router.post('/agregarProducto', createProduct)



module.exports = router;
