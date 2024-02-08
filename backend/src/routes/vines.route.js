const express = require('express');
const router = express.Router();
const { getAllVines, getVineById, createVine } = require("../controllers/vines.controller");

// Recovery of all vines
router.get("/get", getAllVines);
// Recovery of a vine by its id
router.get("/get/:id", getVineById);
// Create a vine
router.post("/create", createVine);

module.exports = router;