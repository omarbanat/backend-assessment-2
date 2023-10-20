const express = require('express');
const router = express.Router();
const article=require('../contoller/ArticleController');
router.get('/getAll', article.getArticle);
router.post('/add',article.addArticle);
router.delete('/delete/:ID', article.deleteArticle);
router.put('/update/:id',article.updateArticle);
module.exports = router;