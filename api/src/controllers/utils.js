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
        return allProducts.map(e => ({
            nombre: e.nombre, 
            imagen: e.imagen, 
            precio: e.precio, 
            categoria: e.category.category, 
            stock: e.stock
        }));
    } catch (error) {
        console.log(error);
    }
}

const getOne = async(id) => {
    try {
        const p = await Products.findOne({
            where: {
                id: id
            },
            include:[{model: Category, attributes: ["category"]}]
        })
        return {
            nombre: p.nombre,
            imagen: p.imagen,
            precio: p.precio,
            categoria: p.category.category,
            stock: p.stock
        };
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
        return products.map(e => ({
            nombre: e.nombre, 
            imagen: e.imagen, 
            precio: e.precio, 
            categoria: e.category.category, 
            stock: e.stock
        }));
    } catch (error) {
        console.log(error)
    }
}

const createProduct = async(nombre, imagen, precio, categoria) => {
    try {
        if(!nombre || !imagen || !precio || !categoria) {
            return("faltan datos")
        }
        let exist = await Products.findOne({
            where: {nombre: nombre}
        })
        if(exist) {
            return("El producto ya existe");
        }
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

const createCategory = async(val, img) => {
    try {
        if (!val || !img) {
            return "Faltan datos";
        }
        let exist = await Category.findOne({
            where: {category: val}
        });
        if (exist) {
            return "La categoria ya existe";
        }
        const newCategory = await Category.create({
            category: val,
            imagen: img
        })
        return newCategory;
    } catch (error) {
        console.log(error)
    }
}

const deleteCategory = async(id) => {
    try {
        await Category.destroy({
            where: {id: id}
        });
    } catch (error) {
        console.log(error);
    }
}

const restoreCategory = async(id) => {
    try {
        await Category.restore({
            where: {id: id}
        })
    } catch (error) {
        console.log(error);
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
    createCategory,
    deleteCategory,
    restoreCategory
}