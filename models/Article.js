const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const ArticlesSchema = new Schema({
  title: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  imageURLs: { type: String, required: true },
  date: { type: Date, required: true },
  body: { type: String, required: true },
  author: { type: String, required: true },
  
});

const Article = model('Articles', ArticlesSchema);

module.exports = Article;
