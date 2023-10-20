const express = require('express');
const router = express.Router();


const {
    addArticles,
    getAllArticles,
    getArticlesByID,
    updateArticlesByID,
    deleteArticles,
} = require('../contollers/articlecontroller');

router.get('/getAll', getAllArticles);
router.get('/get/:ID', getArticlesByID);
router.post('/add', addArticles);
router.put('/update/:ID', updateArticlesByID);
router.delete('/delete/:ID', deleteArticles);


module.exports = router;
