const { default: axios } = require("axios");
const { Products } = require("../db");
const Sequelize = require("sequelize");
const e = require("express");
const productos = require('./products.json')
const Op = Sequelize.Op;
require("dotenv").config();
const {
    getAll,
    getByName,
    getByCategory
} = require('./utils')

const allProducts = async(req, res) => {
    try {
        const products = await getAll();
        res.status(200).send(products);
    } catch (error) {
        console.log(error);
    }
}

const productsByName = async(req, res) => {
    let {name} = req.params;
    try {
        const products = await getByName(name);
        res.status(200).send(products);
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

module.exports = {
    allProducts,
    productsByName,
    productByCategory
}