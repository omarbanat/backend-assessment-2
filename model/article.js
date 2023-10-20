const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const articleSchema = new Schema({
  
  name:{type: String, required:true},
  category:{type: String, required:true},
  body1:{type: String, required:true},
  author:{type: String, required:true},
  image:{type: String, required:true},
  created_at: {type: Date, required:true},
  updated_at: {type: Date, required:true},
}
);

const Article= model('Article',articleSchema);
module.exports = Article;