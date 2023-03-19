require('dotenv').config();
const axios = require('axios')
const { Router } = require('express');
const {allProducts, oneProduct, productByCategory, productCreate, productEdit, productDelete, productRestore} = require('../controllers/productControllers');
const {allCategorys, categoryCreate} = require('../controllers/categoryControllers')

const router = Router();

router.get('/product/:id', oneProduct);
 
router.get('/products/:category', productByCategory);

router.get('/products', allProducts);
 
router.post('/createProduct', productCreate);

router.put('/editProduct/:id', productEdit)

router.delete('/deleteProduct/:id', productDelete);

router.get('/restoreProduct/:id', productRestore);

router.get('/categorys', allCategorys)

router.post('/createCategory', categoryCreate)


module.exports = router;
