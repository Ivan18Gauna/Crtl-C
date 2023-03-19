const { default: axios } = require("axios");
const { Products } = require("../db");
const Sequelize = require("sequelize");
const e = require("express");
const Op = Sequelize.Op;
require("dotenv").config();
const {
    getAllCategorys,
    createCategory
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
    const {category} = req.body;
    try {
        const newCategory = await createCategory(category);
        res.status(200).send(newCategory)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    allCategorys,
    categoryCreate
}