const { default: axios } = require("axios");
const { Products } = require("../db");
const Sequelize = require("sequelize");
const e = require("express");
const Op = Sequelize.Op;
require("dotenv").config();
const {
    getAll,
    getOne,
    getByCategory,
    deleteProduct,
    restoreProduct
} = require('./utils')

const allProducts = async(req, res) => {
    try {
        const products = await getAll();
        res.status(200).send(products);
    } catch (error) {
        console.log(error);
    }
}

const oneProduct = async(req, res) => {
    let {id} = req.params;
    try {
        const product = await getOne(id);
        res.status(200).send(product);
    } catch (error) {
        console.log(error);
    }
}

const productByCategory = async(req, res) => {
    let {category} = req.params;
    try {
        const actualProducts = await getByCategory(category)
        res.status(200).send(actualProducts)
    } catch (error) {
        console.log(error)
    }
}

const productDelete = async(req, res) => {
    let {id} = req.params;
    console.log(id);
    try {
        await deleteProduct(id);
        res.status(200).send("Producto eliminado con exito");
    } catch (error) {
        console.log(error);
    }
}

const productRestore = async(req, res) => {
    let {id} = req.params;
    try {
        await restoreProduct(id);
        res.status(200).send("Producto restaurado con exito");
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    allProducts,
    oneProduct,
    productByCategory,
    productDelete,
    productRestore
}