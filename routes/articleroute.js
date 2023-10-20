const express = require('express');
const router = express.Router();
const article=require('../contoller/ArticleController');
router.get('/getAll', articlel.getArticle);
router.post('/add',article.addArticle);
router.delete('/delete/:ID', article.deleteArticle);
module.exports = router;