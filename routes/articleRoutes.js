const express = require('express');
const router = express.Router();

const {
  getAllArticles,
  addArticle,
  updateArticleByID,
  deleteArticle,
} = require('../contollers/articlesController');

const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

router.get('/getAll', getAllArticles);
router.post('/add', upload.single('image'), addArticle);
router.put('/update/:ID', updateArticleByID);
router.delete('/delete/:ID', deleteArticle);

module.exports = router;
