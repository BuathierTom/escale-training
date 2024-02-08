const mongoose = require('mongoose');

const discoverySchema = new mongoose.Schema({
    id: Number,
    name: String,
    description: String,
    imgLink: String,
    price: Number,
    label: String,
});

const Discovery = mongoose.model('discovery', discoverySchema);

module.exports = Discovery;