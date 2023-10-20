const Article = require('../models/ Article');



const addArticles = async (req, res) => {
  try {
    const newArticle = await Article.create(req.body);
    res.status(200).json({
      success: true,
      message: 'article added successfully',
      data: newArticle,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'article not added ',
      error: error,
    });
  }
};

const getAllArticles = async (req, res) => {
    try {
      const articles = await Article.find({});
      res.status(200).json({
        success: true,
        message: 'Data retrieved successfully',
        data: articles,
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: 'unable to get data',
        error: error,
      });
    }
  };
  
  const getArticlesByID = async (req, res) => {
    try {
      const articles = await Article.findById(req.params.ID);
      res.status(200).json({
        success: true,
        message: 'article retrieved successfully',
        data: articles,
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: 'unable to get article by ID',
        error: error,
      });
    }
  };


  const updateArticlesByID = async (req, res) => {
    try {
        const articles = await Article.findByIdAndUpdate(req.params.ID, req.body, { new: true });
        res.status(200).json({
        success: true,
        message: 'article updated successfully.',
        data: articles,
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: 'Unable to update article',
        error: error,
      });
    }
  };
  
  const deleteArticles = async (req, res) => {
    try {
      const articles = await Article.deleteOne({ _id: req.params.ID });
      res.status(200).json({
        success: true,
        message: 'article deleted successfully',
        data: articles,
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: 'Error occured while deleting the article',
        error: error,
      });
    }
  };
  

module.exports = {
    addArticles,
    getAllArticles,
    getArticlesByID,
    updateArticlesByID,
    deleteArticles,
  
};
