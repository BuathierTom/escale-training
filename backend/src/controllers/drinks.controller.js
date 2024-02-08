const Drinks = require('../models/drinks.model');
const { addLog } = require("../services/logs/logs");
const { ResHelper } = require("../helpers/res.helper");

const getAllDrinks = async (req, res) => {
    try {
        const getAll = await Drinks.find({});
        addLog("info", `getAllDrinks`, "drinks.controller.js");
        return ResHelper.send(res, 200, "Success, recovery of all drinks", getAll);
    } catch (e) {
        addLog("error", e, "drinks.controller.js");
    }
};

const getDrinkById = async (req, res) => {
    try {
        const id = req.params.id;
        const getId = await Drinks.find({"id" : id})
        if (!getId || getId.length === 0) {
            addLog("error", `Error, the drink ${id} doesn't exist`, "drinks.controller.js");
            return ResHelper.send(res, 404, "Error, the drink doesn't exist", getId);
        }
        addLog("info", `getDrinkById ${id}`, "drinks.controller.js");
        return ResHelper.send(res, 200, "Success, recovery of a drink by its id", getId);
    } catch (e) {
        addLog("error", e, "drinks.controller.js");
    }
};

const createDrink = async (req, res) => {
    try {
        const { name, description, imgLink, price, price25cl, price33cl, price50cl, label } = req.body;
        const checkDrinkName = await Drinks.findOne({ "name": name })

        if (checkDrinkName) {
            addLog("error", `Error, the drink ${name} already exist`, "drinks.controller.js");
            return ResHelper.send(res, 400, "Error, the drink already exist", checkDrinkName);
        }

        const maxDrink = await Drinks.findOne({}).sort({ id: -1 });
        let newId = maxDrink ? maxDrink.id + 1 : 1;

        const newDrink = new Drinks({
            id: newId,
            name: name,
            description: description,
            imgLink: imgLink,
            price: price,
            price25cl: price25cl,
            price33cl: price33cl,
            price50cl: price50cl,
            label: label
        });
        const createDrink = await newDrink.save();
        addLog("info", `createDrink ${name}`, "drinks.controller.js");
        return ResHelper.send(res, 201, "Success, the drink has been created", createDrink);
    } catch (e) {
        addLog("error", e, "drinks.controller.js");
    }
};

module.exports = {
    getAllDrinks,
    getDrinkById,
    createDrink,
};