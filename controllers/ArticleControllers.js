const Article= require("../models/articleModels");

const getAllArticles = async (req, res) => {
  try {
    const article = await Article.find({});
    res.status(200).json({
      success: true,
      message: "Data retrieved successfully",
      data: article,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "unable to get data",
      error: error,
    });
  }
};

const getArticleByID = async (req, res) => {
  try {
    const article = await Article.findById(req.params.ID);

    if (!article) {
      return res.status(404).json({
        success: false,
        message: "article not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "article retrieved successfully",
      data: article,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to get article by ID",
      error: error,
    });
  }
};

const addArticle = async (req, res) => {
  try {
    const { Title, Category, Body, Author } = req.body;
    console.log(req.body);

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Image file is required",
      });
    }

    const imageBuffer = req.file.buffer;
    const imageBase64 = imageBuffer.toString("base64");
    const imageContentType = req.file.mimetype;

    const article = new Article({
      Title, Category, Body, Author ,
      ArticleImage: imageBase64,
      ImageContentType: imageContentType,
    });

    await article.save();

    res.status(200).json({
      success: true,
      message: "Data added successfully",
      data: article,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Unable to add data",
      error: error.message,
    });
  }
};

const deleteArticlelByID = async (req, res) => {
  try {
    const article = await Article.deleteOne({ _id: req.params.ID });
    res.status(200).json({
      success: true,
      message: "Data deleted successfully",
      data: article,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "unable to delete data",
      error: error,
    });
  }
};

const updateArticleByID = async (req, res) => {
  try {
    const article = await Article.findByIdAndUpdate(req.params.ID, req.body);
    res.status(200).json({
      success: true,
      message: "skill updated successfully.",
      data: article,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Unable to update skill",
      error: error,
    });
  }
};

module.exports = {
    getAllArticles,
    getArticleByID,
    addArticle,
    deleteArticlelByID,
    updateArticleByID,
};
