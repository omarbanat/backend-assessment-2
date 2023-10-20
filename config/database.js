const mongoose = require('mongoose');

require('dotenv').config();
const MONGODB_URL = process.env.MONGODB_URL;

async function DB_connection() {
    try {
        await mongoose.connect(MONGODB_URL);
        console.log("Successfully connected to database");
    }
    catch (error) {
        console.log(error);
    }
}
module.exports = { DB_connection };