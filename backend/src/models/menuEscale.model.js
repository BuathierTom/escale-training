const mongoose = require('mongoose');

const EscaleSchema = new mongoose.Schema({
    id: Number,
    name: String,
    description: String,
    imgLink: String,
    price: Number,
    label: String,
});

const Escale = mongoose.model('escale', EscaleSchema);

module.exports = Escale;