const express = require('express');
const router = express.Router();

const {
  getAllArticles,
  addArticle,
  updateArticleByID,
  deleteArticle,
} = require('../contollers/articlesController');

router.get('/getAll', getAllArticles);
router.post('/add', addArticle);
router.put('/update/:ID', updateArticleByID);
router.delete('/delete/:ID', deleteArticle);

module.exports = router;
