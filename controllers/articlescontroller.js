const Article = require('../models/Article');

const getAllArticles = async (req, res) => {
  try {
    const Articles = await Article.find({});
    res.status(200).json({
      success: true,
      message: 'Data retrieved successfully',
      data: Articles,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: 'unable to get data',
      error: error,
    });
  }
};

const getArticleByID = async (req, res) => {
  try {
   
    const article = await Article.findById(req.params.ID);
    res.status(200).json({
      success: true,
      message: 'Article retrieved successfully',
      data: article,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: 'unable to get article by ID',
      error: error,
    });
  }
};

const addArticle = async (req, res) => {
  try {
    const article = await Article.create(req.body);
  
    res.status(200).json({
      success: true,
      message: 'Article added successfully',
      data: article,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Article not added successfully',
      error: error,
    });
  }
};

const updateArticleByID = async (req, res) => {
  try {
    const article = await Article.findByIdAndUpdate(req.params.ID, req.body, { new: true });
    
    if (!article) {
      return res.status(404).json({
        success: false,
        message: 'Article not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Article updated successfully.',
      data: article,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Unable to update article',
      error: error.message, 
    });
  }
};

const deleteArticle = async (req, res) => {
  try {
    const article = await Article.deleteOne({ _id: req.params.ID });
    res.status(200).json({
      success: true,
      message: 'Article deleted successfully',
      article: article,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error occured while deleting the article',
      error: error,
    });
  }
};

module.exports = {
  getAllArticles,
  getArticleByID,
  addArticle,
  updateArticleByID,
  deleteArticle,
};
