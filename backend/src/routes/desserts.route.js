const express = require('express');
const router = express.Router();
const { getAllDesserts, getDessertById, createDessert } = require("../controllers/desserts.controller");

// Recovery of all desserts
router.get("/get", getAllDesserts);
// Recovery of a dessert by its id
router.get("/get/:id", getDessertById);
// Create a dessert
router.post("/create", createDessert);

module.exports = router;