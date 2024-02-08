const Vines = require('../models/vines.model');
const { addLog } = require("../services/logs/logs");
const { ResHelper } = require("../helpers/res.helper");

const getAllVines = async (req, res) => {
    try {
        const getAll = await Vines.find({});
        addLog("info", `getAllVines`, "vines.controller.js");
        return ResHelper.send(res, 200, "Success, recovery of all vines", getAll);
    } catch (e) {
        addLog("error", e, "vines.controller.js");
    }
}

const getVineById = async (req, res) => {
    try {
        const id = req.params.id;
        const getId = await Vines.find({"id" : id})
        addLog("info", `getVineById ${id}`, "vines.controller.js");
        return ResHelper.send(res, 200, "Success, recovery of a vine by its id", getId);
    } catch (e) {
        addLog("error", e, "vines.controller.js");
    }
}

const createVine = async (req, res) => {
    try {
        const { name, description, imgLink, price, price12cl, price25cl, price50cl, priceBottle, label } = req.body;
        const checkVineName = await Vines.findOne({ "name": name })
        if (checkVineName) {
            addLog("error", `Error, the vine ${name} already exist`, "vines.controller.js");
            return ResHelper.send(res, 400, "Error, the vine already exist", checkVineName);
        }

        const maxVine = await Vines.findOne({}).sort({ id: -1 });
        let newId = maxVine ? maxVine.id + 1 : 1;

        const newVine = new Vines({
            id: newId,
            name: name,
            description: description,
            imgLink: imgLink,
            price: price,
            price12cl: price12cl,
            price25cl: price25cl,
            price50cl: price50cl,
            priceBottle: priceBottle,
            label: label
        });
        const createVine = await newVine.save();
        addLog("info", `createVine ${name}`, "vines.controller.js");
        return ResHelper.send(res, 201, "Success, the vine has been created", createVine);
    } catch (e) {
        addLog("error", e, "vines.controller.js");
    }
}

module.exports = {
    getAllVines,
    getVineById,
    createVine
}