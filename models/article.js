const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const articleSchema = new Schema({
  title: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  author: { type: String, required: true },
  body: { type: String, required: true },
  image:{type: String, required:true},
  created_at:{ type: Date, default: Date.now },
  updated_at:{ type: Date, default: Date.now }
}); 

const Article = model('Article', articleSchema );

module.exports = Article;
