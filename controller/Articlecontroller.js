const Article = require('../models/Article');

const addArticle= async (req,res)=>{
  try {
    const schema=new Article({
      image:req.body.image,
      category:req.body.category,
      body:req.body.body,
      author:req.body.author,
      name:req.body.name

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
module.exports = {addArticle};
