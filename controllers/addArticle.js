const ArticleModel = require("../models/articleModel");
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

const addArticle = async (req, res) => {
  try {
    if (req.file) {
      req.body.Image = req.file.path;
      const imageBuffer = req.file.buffer;
      const imageBase64 = imageBuffer.toString('base64');
      const imageContentType = req.file.mimetype;
      
    }

    const article = new ArticleModel({
        Image: imageBase64,
              Title: req.body.Title,
      body: req.body.body,
      category: req.body.category,
      author: req.body.author,
      Image: imageBase64, 

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

module.exports = { addArticle };
