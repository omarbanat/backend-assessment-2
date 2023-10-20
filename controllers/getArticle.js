const Article = require('../models/articleModel');

const getAllArticles = async (req, res) => {
  try {
    const data = await Article.find({});
    res.send(data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
}


  
const getArticleById = async (req, res) => {
  try {
    const id = req.params.id;
    const emails = await Article.find({ id: id });
    res.json(emails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


  module.exports = {
    getAllArticles,
    getArticleById
  };
  
  
