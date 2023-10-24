const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const articleSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    author: { type: String, required: true },
    category: { type: String, required: true },
    body: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Article = model('Articles', articleSchema);

module.exports = Article;
