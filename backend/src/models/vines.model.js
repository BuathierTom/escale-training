const mongoose = require('mongoose');

const vinesSchema = new mongoose.Schema({
    id: Number,
    name: String,
    description: String,
    imgLink: String,
    price: Number,
    price12cl: Number,
    price25cl: Number,
    price50cl: Number,
    priceBottle: Number,
    label: String,
});

const Vines = mongoose.model('vines', vinesSchema);

module.exports = Vines;