const mongoose = require('mongoose');
const MONGODB_URL = process.env.MONGODB_URL;

 async function dbconnection() {
   try {
     await mongoose.connect(MONGODB_URL);
     console.log('connected');
   } catch (error) {
     console.log(error);
   }
  }
module.exports = dbconnection;
