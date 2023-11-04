const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const uploadDirectory = path.join(__dirname, '..', 'uploads');
fs.mkdirSync(uploadDirectory, { recursive: true });


const storage = multer.diskStorage({
  destination: uploadDirectory,
  filename: (req, file, cb) => {
    // Generate a unique filename for the uploaded image
    const filename = `${Date.now()}-${file.originalname}`;
    cb(null, filename);
  },
});

const upload = multer({ storage :storage});


const {
    getAllArticles,
    getArticleByID,
    addArticle,
    updateArticle,
    deleteArticle,
} = require('../controllers/articlescontroller');

router.get('/getAll', getAllArticles);
router.get('/get/:ID', getArticleByID);
router.post('/add', upload.single('image'),addArticle);
router.put('/update/:title',upload.single('image'), updateArticle);
router.delete('/delete/:ID', deleteArticle);


module.exports = router;
