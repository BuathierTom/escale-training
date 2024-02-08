const Discovery = require('../models/menuDiscovery.model');
const { addLog } = require("../services/logs/logs");
const { ResHelper } = require("../helpers/res.helper");

const getAllDiscovery = async (req, res) => {
    try {
        const getAll = await Discovery.find({});
        addLog("info", `getAllDiscovery`, "menuDiscovery.controller.js");
        return ResHelper.send(res, 200, "Success, recovery of all discovery", getAll);
    } catch (e) {
        addLog("error", e, "menuDiscovery.controller.js");
    }
}

const getDiscoveryById = async (req, res) => {
    try {
        const id = req.params.id;
        const getId = await Discovery.find({"id" : id})
        if (!getId || getId.length === 0) {
            addLog("error", `Error, the discovery ${id} doesn't exist`, "menuDiscovery.controller.js");
            return ResHelper.send(res, 404, "Error, the discovery doesn't exist", getId);
        }
        addLog("info", `getDiscoveryById ${id}`, "menuDiscovery.controller.js");
        return ResHelper.send(res, 200, "Success, recovery of a discovery by its id", getId);
    } catch (e) {
        addLog("error", e, "menuDiscovery.controller.js");
    }
}

const createDiscovery = async (req, res) => {
    try { 
        const { name, description, imgLink, price, label } = req.body;
        const checkDiscoveryName = await Discovery.findOne({ "name": name })
        if (checkDiscoveryName) {
            addLog("error", `Error, the discovery ${name} already exist`, "menuDiscovery.controller.js");
            return ResHelper.send(res, 400, "Error, the discovery already exist", checkDiscoveryName);
        }

        const maxDiscovery = await Discovery.findOne({}).sort({ id: -1 });
        let newId = maxDiscovery ? maxDiscovery.id + 1 : 1;

        const newDiscovery = new Discovery({
            id: newId,
            name: name,
            description: description,
            imgLink: imgLink,
            price: price,
            label: label
        });

        const createDiscovery = await newDiscovery.save();
        addLog("info", `createDiscovery ${name}`, "menuDiscovery.controller.js");
        return ResHelper.send(res, 201, "Success, the discovery has been created", createDiscovery);
    }
    catch (e) {
        addLog("error", e, "menuDiscovery.controller.js");
    }
}

module.exports = {
    getAllDiscovery,
    getDiscoveryById,
    createDiscovery
}