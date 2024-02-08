const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { addLog } = require("../logs/logs");

dotenv.config();

const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, {
            dbName: process.env.DB_NAME,
        });
        addLog("info", "Connected to MongoDB :)", "connect.js");
    } catch (error) {
        addLog("error", error, "connect.js");
    }
};

const getCollection = (collectionName) => {
    return mongoose.connection.db.collection(collectionName);
};


module.exports = {
    connectToDatabase,
    getCollection,
};