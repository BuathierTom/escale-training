const express = require('express');
const router = express.Router();
const { getAllEscale, getEscaleById, createEscale } = require("../controllers/menuEscale.controller");

// Recovery of all menuEscale
router.get("/get", getAllEscale);
// Recovery of a menuEscale by its id
router.get("/get/:id", getEscaleById);
// Create a menuEscale
router.post("/create", createEscale);

module.exports = router;