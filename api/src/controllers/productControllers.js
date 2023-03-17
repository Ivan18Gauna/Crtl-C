const { default: axios } = require("axios");
const { Productos } = require("../db");
const Sequelize = require("sequelize");
const e = require("express");
const productos = require('./products.json')
const Op = Sequelize.Op;
require("dotenv").config();
const {
    getAll,
    getByName
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

module.exports = {
    allProducts,
    productsByName
}