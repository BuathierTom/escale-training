const Desserts = require('../models/desserts.model');
const { addLog } = require("../services/logs/logs");
const { ResHelper } = require("../helpers/res.helper");

/**
 * @function getAllDesserts
 * Get all desserts
 * 
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @returns {Object} - Return all desserts
 */
const getAllDesserts = async (req, res) => {
    try {
        const getAll = await Desserts.find({});
        addLog("info", `getAllDesserts`, "desserts.controller.js");
        return ResHelper.send(res, 200, "Success, recovery of all desserts", getAll);
    } catch (e) {
        addLog("error", e, "desserts.controller.js");
    }
}

/**
 * @function getDessertById
 * Get a dessert by its id
 * 
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @returns {Object} - Return a dessert by its id
 */
const getDessertById = async (req, res) => {
    try {
        const id = req.params.id;
        const getId = await Desserts.find({"id" : id})
        if (!getId || getId.length === 0) {
            addLog("error", `Error, the dessert ${id} doesn't exist`, "desserts.controller.js");
            return ResHelper.send(res, 404, "Error, the dessert doesn't exist", getId);
        }
        addLog("info", `getDessertById ${id}`, "desserts.controller.js");
        return ResHelper.send(res, 200, "Success, recovery of a dessert by its id", getId);
    } catch (e) {
        addLog("error", e, "desserts.controller.js");
    }
}

const createDessert = async (req, res) => {
    try {
        const { name, description, imgLink, price, label } = req.body;
        const checkDessertID = await Desserts.findOne({ "name": name })

        if (checkDessertID) {
            addLog("error", `Error, the dessert ${name} already exist`, "desserts.controller.js");
            return ResHelper.send(res, 400, "Error, the dessert already exist", checkDessertID);
        }

        const maxDessert = await Desserts.findOne({}).sort({ id: -1 });

        let newId = maxDessert ? maxDessert.id + 1 : 1;

        const newDessert = new Desserts({
            id: newId,
            name: name,
            description: description,
            imgLink: imgLink,
            price: price,
            label: label
        });
        const createDessert = await newDessert.save();
        addLog("info", `createDessert ${name}`, "desserts.controller.js");
        return ResHelper.send(res, 201, "Success, the dessert has been created", createDessert);
    } catch (e) {
        addLog("error", e, "desserts.controller.js");
    }
}

module.exports = {
    getAllDesserts,
    getDessertById,
    createDessert
}