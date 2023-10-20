const Article = require("../models/articleModel");
const ArticleModel = require("../models/articleModel")

const deleteArticle = async (req, res) => {
    try {
      const articles = await Article.deleteOne({ title: req.params.Title });
      res.status(200).json({
        success: true,
        message: "Project deleted successfully",
        projets: projects,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: "Error occured while deleting the project",
        error: error,
      });
    }
  };
  module.exports={deleteArticle};