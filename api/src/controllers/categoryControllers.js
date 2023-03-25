const { default: axios } = require("axios");
const { Products } = require("../db");
const Sequelize = require("sequelize");
const e = require("express");
const Op = Sequelize.Op;
require("dotenv").config();
const {
    getAllCategorys,
    createCategory,
    deleteCategory,
    restoreCategory
} = require('./utils');

const allCategorys = async(req, res) => {
    try {
        const categorys = await getAllCategorys()
        res.status(200).send(categorys)
    } catch (error) {
        console.log(error);
    }
}

const categoryCreate = async(req, res) => {
    let {category, imagen} = req.body;
    try {
        let newCategory = await createCategory(category, imagen);
        res.status(200).send(newCategory)
    } catch (error) {
        console.log(error);
    }
}

const categoryDelete = async(req, res) => {
    const {id} = req.params;
    try {
        await deleteCategory(id)
        res.status(200).send("Categoria eliminada con exito.")
    } catch (error) {
        console.log(error);
    }
}

const categoryRestore = async(req, res) => {
    const {id} = req.params;
    try {
        await restoreCategory(id);
        res.status(200).send("Categoria restaurada con exito.")
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    allCategorys,
    categoryCreate,
    categoryDelete,
    categoryRestore
}