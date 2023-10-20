const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const ArticleSchema = new Schema({
  Title: { type: String, required: true },
   Category: { type: String, required: true },
   Body: { type: String, required: true },
  ArticleImage: { type: String, required: true },
  ImageContentType: { type: String, required: true },
Author: { type: String, required: true },
  
});

const Article = model("Article", ArticleSchema);

module.exports = Article;