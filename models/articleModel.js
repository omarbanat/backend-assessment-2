const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const articleSchema = new Schema({
    image_url: { type: String, required: true },
    title: { type: String, required: true },
    category: { type: String, required: true },
    body: { type: String, required: true },
    author: { type: String, required: true }
}, { timestamps: true });

const Article = model('Article', articleSchema);
module.exports = Article;