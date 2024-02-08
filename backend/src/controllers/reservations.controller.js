const Reservations = require('../models/reservations.model');
const { addLog } = require("../services/logs/logs");
const { ResHelper } = require("../helpers/res.helper");

const getAllReservations = async (req, res) => {
    try {
        const getAll = await Reservations.find({});
        addLog("info", `getAllReservations`, "reservations.controller.js");
        return ResHelper.send(res, 200, "Success, recovery of all reservations", getAll);
    } catch (e) {
        addLog("error", e, "reservations.controller.js");
    }
}

const getReservationById = async (req, res) => {
    try {
        const id = req.params.id;
        const getId = await Reservations.find({"id" : id})
        if (!getId || getId.length === 0) {
            addLog("error", `Error, the reservation ${id} doesn't exist`, "reservations.controller.js");
            return ResHelper.send(res, 404, "Error, the reservation doesn't exist", getId);
        }
        addLog("info", `getReservationById ${id}`, "reservations.controller.js");
        return ResHelper.send(res, 200, "Success, recovery of a reservation by its id", getId);
    } catch (e) {
        addLog("error", e, "reservations.controller.js");
    }
}

const createReservation = async (req, res) => {
    try {
        const { name, date, hour, people, comment } = req.body;
        const checkReservationName = await Reservations.findOne({ "name": name })
        if (checkReservationName) {
            addLog("error", `Error, the reservation ${name} already exist`, "reservations.controller.js");
            return ResHelper.send(res, 400, "Error, the reservation already exist", checkReservationName);
        }

        const maxReservation = await Reservations.findOne({}).sort({ id: -1 });
        let newId = maxReservation ? maxReservation.id + 1 : 1;

        const newReservation = new Reservations({
            id: newId,
            name: name,
            date: date,
            hour: hour,
            people: people,
            comment: comment
        });
        const createReservation = await newReservation.save();
        addLog("info", `createReservation ${name}`, "reservations.controller.js");
        return ResHelper.send(res, 201, "Success, the reservation has been created", createReservation);
    } catch (e) {
        addLog("error", e, "reservations.controller.js");
    }
}

module.exports = {
    getAllReservations,
    getReservationById,
    createReservation
}