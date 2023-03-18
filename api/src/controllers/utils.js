const { default: axios } = require("axios");
const { Productos, Category } = require("../db");
const Sequelize = require("sequelize");
const e = require("express");
const productos = require('./products.json')
const Op = Sequelize.Op;
require("dotenv").config();

const getAll = async() => {
    try {
        const db = await Productos.findAll();
        if (!db[0]) {
            productos.map(async e => {
                let actualProduct = await Productos.create({
                    nombre: e.nombre,
                    imagen: e.imagen,
                    precio: e.precio
                });
                const [actualCategory, succes] = await Category.findOrCreate({
                    where: {
                      category: e.categoria,
                    },
                  });
                await actualCategory.addProductos(actualProduct);
            });
        };
        const allProducts = await Productos.findAll({
            include:[{model: Category, attributes: ["category"]}]
        });
        return allProducts;
    } catch (error) {
        console.log(error);
    }
}

const getByName = async(name) => {
    try {
        const products = await Productos.findAll({
            where: {
                nombre: { [Op.iLike]: `%${name}%` }
            }
        })
        return products;
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
}