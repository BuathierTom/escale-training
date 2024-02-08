const mongoose = require('mongoose');

const dessertsSchema = new mongoose.Schema({
    id: Number,
    name: String,
    description: String,
    imgLink: String,
    price: Number,
    label: String,
});

const Desserts = mongoose.model('desserts', dessertsSchema);

module.exports = Desserts;