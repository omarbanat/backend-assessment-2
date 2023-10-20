const Article = require('../models/Article');
// adding new record article
const addArticle= async (req,res)=>{
  try {
    const schema=new Article({
      image:req.body.image,
      category:req.body.category,
      body1:req.body.body1,
      author:req.body.author,
      name:req.body.name
//i have to get current date to insert it in field created and updated
    });
    const newArticle = await schema.save();
    res.status(200).json({
      success: true,
      message: 'Data added successfully',
      data: newArticle,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'unable to add data',
      error: error,
    });
  }
}
// getting All Articles 
const getArticle = async (req, res) => {
  try {
    const article = await Article.find({});
    res.status(200).json({
      success: true,
      message: 'Data retrieved successfully',
      data: skill,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'unable to get data',
      error: error,
    });
  }
};
// deletion
const deleteArticle = async (req, res) => {
    try {
      const article = await Article.deleteOne({ _id: req.params.ID });
      res.status(200).json({
        success: true,
        message: 'Article deleted successfully',
        data: skill,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error occured while deleting the article',
        error: error,
      });
    }
  };

  const  updateArticle = async(req,res)=>{
    try{
        let id=req.params.id;
        await article.updateOne({_id:id},{$set: [{name:req.body.name},{category:req.body.category},{author:req.body.author},{body1:req.body.body1},{image:req.body.image}]});
        res.status(200).json({message:"A Article updated successfully"});
    }catch(error){
        res.status(500).json({message:"An error occured",error:error});
    }
}

module.exports = {getArticle,deleteArticle,addArticle,updateArticle};
