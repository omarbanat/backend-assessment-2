
const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();
const {
  getAllArticles,
  getArticleByID,
  addArticle,
  deleteArticlelByID,
  updateArticleByID,
} = require("../controllers/ArticleControllers");

router.get("/getAll", getAllArticles);
router.get("/getByID/:ID", getArticleByID);
router.post("/add", upload.single("image"), addArticle);
router.put("/update/:ID", updateArticleByID);
router.delete("/delete/:ID", deleteArticlelByID);

module.exports = router;