const Escale = require("../models/menuEscale.model.js");
const { addLog } = require("../services/logs/logs");
const { ResHelper } = require("../helpers/res.helper");

const getAllEscale = async (req, res) => {
    try {
        const getAll = await Escale.find({});
        addLog("info", `getAllEscale`, "menuEscale.controller.js");
        return ResHelper.send(res, 200, "Success, recovery of all escale", getAll);
    } catch (e) {
        addLog("error", e, "menuEscale.controller.js");
    }
}

const getEscaleById = async (req, res) => {
    try {
        const id = req.params.id;
        const getId = await Escale.find({"id" : id})
        if (!getId || getId.length === 0) {
            addLog("error", `Error, the escale ${id} doesn't exist`, "menuEscale.controller.js");
            return ResHelper.send(res, 404, "Error, the escale doesn't exist", getId);
        }
        addLog("info", `getEscaleById ${id}`, "menuEscale.controller.js");
        return ResHelper.send(res, 200, "Success, recovery of a escale by its id", getId);
    } catch (e) {
        addLog("error", e, "menuEscale.controller.js");
    }
}

const createEscale = async (req, res) => {
    try {
        const { name, description, imgLink, price, label } = req.body;
        const checkEscaleName = await Escale.findOne({ "name": name })
        if (checkEscaleName) {
            addLog("error", `Error, the Escale ${name} already exist`, "menuEscale.controller.js");
            return ResHelper.send(res, 400, "Error, the Escale already exist", checkEscaleName);
        }

        const maxEscale = await Escale.findOne({}).sort({ id: -1 });
        let newId = maxEscale ? maxEscale.id + 1 : 1;

        const newEscale = new Escale({
            id: newId,
            name: name,
            description: description,
            imgLink: imgLink,
            price: price,
            label: label
        });
        const createEscale = await newEscale.save();
        addLog("info", `createEscale ${name}`, "menuEscale.controller.js");
        return ResHelper.send(res, 201, "Success, the escale has been created", createEscale);
    } catch (e) {
        addLog("error", e, "menuEscale.controller.js");
    }
}

module.exports = {
    getAllEscale,
    getEscaleById,
    createEscale
}