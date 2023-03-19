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

const getOne = async(id) => {
    try {
        const products = await Products.findOne({
            where: {
                id: id
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
        console.log(error)
    }
}

const createProduct = async(nombre, imagen, precio, categoria) => {
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
        await actualCategory.addProducts(actualProduct);
        return actualProduct;
    } catch(error) {
        console.log(error)
    }
};

const editProduct = async(nombre, imagen, precio, categoria, id) => {
    try {
        const edited = await Products.update({
                nombre,
                imagen,
                precio,
                categoria
            },
            {
                where: {id: id}
        })
        return edited;
    } catch (error) {
        console.log(error);
    }
}

const deleteProduct = async(id) => {
    console.log(id)
    console.log(await Products.findOne({where: {id: id}}))
    try {
        await Products.destroy({
            where: {id: id}
        })
    } catch (error) {
        console.log(error)
    }
}

const restoreProduct = async(id) => {
    try {
        await Products.restore({
            where: {id: id}
        })
    } catch (error) {
        console.log(error);
    }
}

const getAllCategorys = async() => {
    try {
        const allCategorys = await Category.findAll()
        return allCategorys;
    } catch (error) {
        console.log(error);
    }
}

const createCategory = async(category) => {
    try {
        const newCategory = await Category.create({
            category: category
        })
        return newCategory;
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAll,
    getOne,
    getByCategory,
    createProduct,
    editProduct,
    deleteProduct,
    restoreProduct,
    getAllCategorys,
    createCategory
}