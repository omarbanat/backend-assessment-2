const Article = require('../models/articleModel');
const { imageUploader } = require('../imageUploader');

const addArticle = async (req, res) => {
    try {
        const imageURL = await imageUploader(req);
        const schema = new Article({
            image_url: imageURL,
            title: req.body.title,
            category: req.body.category,
            body: req.body.body,
            author: req.body.author,
            // or 
            //  ...req.body,
            //image_url: imageURL,
        });
        const newArticle = await schema.save();
        res.status(200).json({
            success: true,
            message: 'Article added successfully',
            data: newArticle,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'An error occured while adding the article',
            error: error,
        });
    }
}

const getArticles = async (req, res) => {
    try {
        const article = await Article.find({});
        res.status(200).json({
            success: true,
            message: 'All articles retrieved successfully',
            data: article,
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: 'An error occured while retrieving all articles',
            error: error,
        });
    }
};

const getArticleById = async (req, res) => {
    try {
        const articleId = req.params.id;
        const article = await Article.findById(articleId);

        if (!article) {
            return res.status(404).json({
                success: false,
                message: 'Article not found',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Article retrieved successfully',
            data: article,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'An error occurred while retrieving the article',
            error: error,
        });
    }
};

const updateArticleById = async (req, res) => {
    try {
        const article = await Article.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            success: true,
            message: 'Article updated successfully',
            data: article,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'An error occurred while updating the article',
            error: error,
        });
    }
};

const deleteArticle = async (req, res) => {
    try {
        const article = await Article.deleteOne({ _id: req.params.id });
        res.status(200).json({
            success: true,
            message: 'Article deleted successfully',
            data: article,
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: 'An error occurred while deleting the article',
            error: error,
        });
    }
};

module.exports = {
    addArticle,
    getArticles,
    getArticleById,
    updateArticleById,
    deleteArticle
}; 