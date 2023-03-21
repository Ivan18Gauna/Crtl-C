require('dotenv').config();
const axios = require('axios')
const { Router } = require('express');
const {allProducts, oneProduct, productByCategory, productCreate, productEdit, productDelete, productRestore} = require('../controllers/productControllers');
const {allCategorys, categoryCreate, categoryDelete, categoryRestore} = require('../controllers/categoryControllers')

const router = Router();
/*
            Rutas de producto
*/
router.get('/product/:id', oneProduct);
 
router.get('/products/:category', productByCategory);

router.get('/products', allProducts);
 
router.post('/createProduct', productCreate);

router.put('/editProduct/:id', productEdit)

router.delete('/deleteProduct/:id', productDelete);

router.get('/restoreProduct/:id', productRestore);
/*
            Rutas de categoria
*/
router.get('/categorys', allCategorys);

router.post('/createCategory', categoryCreate);

router.delete('/deleteCategory/:id', categoryDelete);

router.get('/restoreCategory/:id', categoryRestore);


module.exports = router;
