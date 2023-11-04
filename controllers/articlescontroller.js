const Article = require('../models/Article');

const multer = require('multer');
const path = require('path');
const fs = require('fs');


// Create a directory to store uploaded images
const uploadDirectory = path.join(__dirname, '..', 'uploads');
fs.mkdirSync(uploadDirectory, { recursive: true });


const storage = multer.diskStorage({
  destination: uploadDirectory,
  filename: (req, file, cb) => {
    // Generate a unique filename for the uploaded image
    const filename = `${Date.now()}-${file.originalname}`;
    cb(null, filename);
  },
});

const upload = multer({ storage :storage});
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


const updateArticle = async (req, res) => {
  try {
    const { title } = req.params;
    const {  body, category,author } = req.body;
    const imageFilename = req.file.filename;

   
    console.log('Updated image:', imageFilename);

    // Find and update the article
    const updatedArticle = await Article.findOneAndUpdate(
      { title },
      { $set: {'body':body,'category':category,'author':author,'image':imageFilename}},
      { new: true }
    );

    if (!updatedArticle) {
      return res.status(404).json({
        success: false,
        message: "Article not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Article updated successfully.",
      data: updatedArticle,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Unable to update article",
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

const addArticle = async (req, res) => {
  try {
    
    const imageFilename = req.file.filename;

    const article = new Article({
      title: req.body.title,
      body: req.body.body,
      category: req.body.category,
      author: req.body.author,
      image: imageFilename,
    });

    const savedArticle = await article.save();

    res.status(200).json({
      code: 200,
      message: 'Article added successfully',
      data: savedArticle
    });
  } catch (error) {
    res.status(400).json({
      code: 400,
      message: 'Article not added successfully',
      error: error.message
    });
  }
};
module.exports = {
  getAllArticles,
  getArticleByID,
  addArticle,
  updateArticle,
  deleteArticle,
};
