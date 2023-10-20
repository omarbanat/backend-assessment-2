const express = require('express');
const router = express.Router();


const {
    getAllArticles,
    getArticleByID,
    addArticle,
    updateArticleByID,
    deleteArticle,
} = require('../controllers/articlescontroller');

router.get('/getAll', getAllArticles);
router.get('/get/:ID', getArticleByID);
router.post('/add', addArticle);
router.put('/update/:ID', updateArticleByID);
router.delete('/delete/:ID', deleteArticle);


module.exports = router;
