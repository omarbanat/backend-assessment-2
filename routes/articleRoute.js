const express = require("express");
const router = express.Router();

const {
  getAllArticles,
  getArticleByID,
  updateArticleByID,
  deleteArticle,
  addArticle,
} = require("../controllers/articleController");

router.get("/getAll", getAllArticles);
router.get("/get/:ID", getArticleByID);
router.put("/update/:ID", updateArticleByID);
router.delete("/delete/:ID", deleteArticle);
router.post("/add", addArticle);

module.exports = router;
