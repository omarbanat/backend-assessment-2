const express = require('express');
const router = express.Router();
const article = require('../controllers/articleController');

const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

router.post('/add', upload.single('image'), article.addArticle);
router.get('/getAll', article.getArticles);
router.get('/getArticleById/:id', article.getArticleById);
router.put('/updateArticleById/:id', article.updateArticleById);
router.delete('/delete/:id', article.deleteArticle)

module.exports = router;