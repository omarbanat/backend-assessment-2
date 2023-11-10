const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const connexion = require('./config/database');
const articleRoutes = require('./routes/articleRoutes');
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded()); // ?
app.use(cors());
app.use('/articles', articleRoutes);

connexion.DB_connection();
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});