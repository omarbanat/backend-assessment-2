const Article = require("../models/articleModel");
const ArticleModel = require("../models/articleModel")

const updateArticleByTitle = async (req, res) => {
    try {
      const { title } = req.params; 
      const updatedArticleData = req.body; 
  
      // Find and update the project
      const updatedArticle = await Article.findOneAndUpdate(
        { title },
        { $set: updatedArticleData }, // Use $set to update specific fields
        { new: true }
      );
  
      if (!updatedArticle) {
        return res.status(404).json({
          success: false,
          message: "Project not found",
        });
      }
  
      res.status(200).json({
        success: true,
        message: "Project updated successfully.",
        data: updatedProject,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: "Unable to update project",
        error: error.message, 
      });
    }
  };
  module.exports={updateArticleByTitle};