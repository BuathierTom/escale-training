const express = require('express');
const router = express.Router();
const { getAllDiscovery, getDiscoveryById, createDiscovery } = require("../controllers/menuDiscovery.controller");

// Recovery of all menuDiscovery
router.get("/get", getAllDiscovery);
// Recovery of a menuDiscovery by its id
router.get("/get/:id", getDiscoveryById);
// Create a menuDiscovery
router.post("/create", createDiscovery);

module.exports = router;