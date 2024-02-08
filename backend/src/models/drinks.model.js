const mongoose = require('mongoose');

const drinksSchema = new mongoose.Schema({
    id: Number,
    name: String,
    description: String,
    imgLink: String,
    price: Number,
    price25cl: Number,
    price33cl: Number,
    price50cl: Number,
    label: String,
});

const Drinks = mongoose.model('drinks', drinksSchema);

module.exports = Drinks;