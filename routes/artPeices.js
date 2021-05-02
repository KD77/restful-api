const express = require('express');
const router = express.Router()
const Art = require('../models/art')

// GET BACK ALL THE POSTS
router.get('/', async(req,res)=>{
  try {
    const arts = await Art.find()
    res.json(arts)

  } catch (error) {
    res.json({message:error})
  }
})

//SUBMITS A POST
router.post('/', async(req,res)=>{
  const art = new Art({
    name: req.body.name,
    description: req.body.description,
    view:req.body.view
    
  });
  try {
    const a1 = await art.save()
    res.json(a1)
  } catch (error) {
    res.json({message:error})
  }

})
// SPECIFIC POST 
router.get('/:postId', async(req,res)=>{
  
  try {
    const art = await Art.findById(req.params.postId);
    res.json(art)
  } catch (error) {
    res.json({message:error})
  }
})
module.exports=router