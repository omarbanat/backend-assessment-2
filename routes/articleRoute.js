const express = require('express');
const router =express.Router();
const multer = require('multer');
const upload = multer();
const{
    addArticle,
  }=require("../controllers/addArticle")
  router.post('/add', upload.single('image'),addArticle);
  const{
    getAllArticles,
    getArticleById,
  }=require("../controllers/getArticle")
  const{
    deleteArticle,
  }=require("../controllers/deleteArticle")
  const{
    updateArticleByTitle,
  }=require("../controllers/UpdateAritcle")
  router.get("/getAllArticles", getAllArticles);
router.get("/getArticle/:id", getArticleById);
router.delete("/deleteArticles/:Title", deleteArticle);
router.put("/update/:Title", updateArticleByTitle);
  module.exports = router;