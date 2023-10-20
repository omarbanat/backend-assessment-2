require("dotenv").config();
const cors = require("cors");
const express = require("express");
const dbConnection = require('./Config/dbConnection');
const ArticleRoutes=require("./routes/articleRoutes")
const port = process.env.PORT;
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use("/Article", ArticleRoutes);

app.listen(port, () => {
  dbConnection()
    .then(() => console.log("success"))
    .catch((err) => console.log(err));
  console.log(`Example app listening on port ${port}`);
});