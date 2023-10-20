const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const articleSchema = new Schema({
  
  name:{type: String, required:true},
  category:{type: String},
  body:{type: String},
  author:{type: String, required:true},
  image:{type: String}
});
const Skill = model('Article',articleSchema);
module.exports = Article;