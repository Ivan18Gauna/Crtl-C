require('dotenv').config();
const axios = require('axios')
const { Router } = require('express');
const {allProducts, oneProduct, productByCategory, productDelete, productRestore} = require('../controllers/productControllers');
const {createProduct, createCategory} = require('../controllers/utils');

const router = Router();

router.get('/product/:id', oneProduct);
 
router.get('/products/:category', productByCategory);

router.get('/products', allProducts);
 
router.post('/createProduct', createProduct);

router.delete('/deleteProduct/:id', productDelete);

router.get('/restoreProduct/:id', productRestore);

router.post('/createCategory', createCategory)


module.exports = router;
