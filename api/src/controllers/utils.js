const { default: axios } = require("axios");
const { Productos } = require("../db");
const Sequelize = require("sequelize");
const e = require("express");
const productos = require('./products.json')
const Op = Sequelize.Op;
require("dotenv").config();

const getProducts = async(req, res) => {
    console.log(productos)
    res.status(200).send(productos)
}

const getAll = async(req, res) => {
    const db = await Productos.findAll();
    if (!db[0]) {
        productos.map(async e => {
            await Productos.create({
                nombre: e.nombre,
                imagen: e.imagen,
                precio: e.precio
            });
        });
    }
    const allProducts = await Productos.findAll()
    res.status(200).send(allProducts)
}

const getByName = async(req, res) => {
    const {name} = req.params;
    console.log(name)
    try {
        const products = await Productos.findAll({
            where: {
                nombre: { [Op.iLike]: `%${name}%` }
            }
        })
        console.log(products)
        res.status(200).send(products);
    } catch (error) {
        console.log(error)
    }
}

const createProduct = async(req, res) => {
    let {nombre, imagen, precio} = req.body;
    try {
        const dbProduct = await Productos.create({
            nombre: nombre,
            imagen: imagen,
            precio: precio
        });
        res.status(200).send(dbProduct)
    } catch(error) {
        console.log(error)
    }
};

module.exports = {
    createProduct,
    getAll,
    getByName,
    getProducts
}