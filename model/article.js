const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const articleSchema = new Schema({
  
  name:{type: String, required:true},
  category:{type: String, required:true},
  body:{type: String, required:true},
  author:{type: String, required:true},
  image:{type: String, required:true}
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
});
const Article= model('Article',articleSchema);
module.exports = Article;