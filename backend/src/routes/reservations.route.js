const express = require('express');
const router = express.Router();
const { getAllReservations, getReservationById, createReservation } = require("../controllers/reservations.controller");

// Recovery of all reservations
router.get("/get", getAllReservations);
// Recovery of a reservation by its id
router.get("/get/:id", getReservationById);
// Create a reservation
router.post("/create", createReservation);

module.exports = router;