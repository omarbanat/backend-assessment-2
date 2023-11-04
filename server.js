require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbConnection = require('./config/db');
const articleRoutes = require('./routes/articlesRoute');
const Article = require('./models/Article');

const app = express();
const port = 5000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/articles', articleRoutes);
/////////////////////////////////image upload

app.listen(port, () => {
  dbConnection()
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(err));
  console.log(`app listening on port ${port}`);
});