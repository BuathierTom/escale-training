const mongoose = require('mongoose');

const ReservationsSchema = new mongoose.Schema({
    id: Number,
    name: String,
    date: String,
    hour: String,
    people: Number,
    comment: String,
});

const Reservations = mongoose.model('reservation', ReservationsSchema);

module.exports = Reservations;