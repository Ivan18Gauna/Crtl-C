const { default: axios } = require("axios");
const { Products, Category } = require("../db");
const Sequelize = require("sequelize");
const e = require("express");
const productos = require('./products.json')
const Op = Sequelize.Op;
require("dotenv").config();

const getAll = async() => {
    try {
        const db = await Products.findAll();
        if (!db[0]) {
            productos.map(async e => {
                let actualProduct = await Products.create({
                    nombre: e.nombre,
                    imagen: e.imagen,
                    precio: e.precio
                });
                const [actualCategory, succes] = await Category.findOrCreate({
                    where: {
                      category: e.categoria,
                    },
                  });
                await actualCategory.addProducts(actualProduct);
            });
        };
        const allProducts = await Products.findAll({
            include:[{model: Category, attributes: ["category"]}]
        });
        return allProducts;
    } catch (error) {
        console.log(error);
    }
}

const getByName = async(name) => {
    try {
        const products = await Products.findAll({
            where: {
                nombre: { [Op.iLike]: `%${name}%` }
            }
        })
        return products;
    } catch (error) {
        console.log(error)
    }
}

const getByCategory = async(category) => {
    console.log(category)
    try {
        const actualCategory = await Category.findOne({
            where: {
                category: { [Op.iLike]: `%${category}%`}
            }
        });
        const products = await Products.findAll({
            include:[{model: Category, attributes: ["category"]}],
            where: {
                categoryId: actualCategory.id
            }
        })
        return products;
    } catch (error) {
        console.log("error")
    }
}

const createProduct = async(req, res) => {
    let {nombre, imagen, precio, categoria} = req.body;
    try {
        const actualProduct = await Products.create({
            nombre: nombre,
            imagen: imagen,
            precio: precio
        });
        const [actualCategory, succes] = await Category.findOrCreate({
            where: {
                category: categoria,
            },
        });
        console.log(actualCategory)
        await actualCategory.addProducts(actualProduct);
        res.status(200).send(actualProduct)
    } catch(error) {
        console.log(error)
    }
};

module.exports = {
    createProduct,
    getAll,
    getByName,
    getByCategory
}