require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser=require('body-parser');
const mongoose= require('mongoose');
const PORT = 5000;
const routes= require('./routes/articleRoute');
const articleModel = require("./models/articleModel");

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

mongoose.connect('mongodb+srv://alaazaiter:oTqH4q3c7EuzPgig@cluster0.ixc67tq.mongodb.net/Portfolio', { useNewUrlParser:true, useUnifiedTopology: true})
const db = mongoose.connection;
db.on('error',(error)=> console.error.bind(error , "Error when connceting to database"))
db.once('open' , ()=> console.log(" Connected to Database"))


app.use('/article',routes);
  

