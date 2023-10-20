const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  Image: { type: String, required: true },
  Title: { type: String, required: true },
  body: { type: String, required: true },
  category: { type: String, required: true },
  author: { type: String, required: true },

});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article ;
