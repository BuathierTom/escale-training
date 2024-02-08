const express = require('express');
const router = express.Router();
const { getAllDrinks, getDrinkById, createDrink } = require("../controllers/drinks.controller");

// Recovery of all drinks
router.get("/get", getAllDrinks);
// Recovery of a drink by its id
router.get("/get/:id", getDrinkById);
// Create a drink
router.post("/create", createDrink);

module.exports = router;