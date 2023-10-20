require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbConnection = require('./config/db');
const articleRoutes = require('./routes/articlesRoute');

const app = express();
const port = 8000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/article', articleRoutes);

app.listen(port, () => {
  dbConnection()
    .then(() => console.log('Connecte to MongoDB'))
    .catch((err) => console.log(err));
  console.log(`app listening on port ${port}`);
});