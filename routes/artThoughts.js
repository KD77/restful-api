const express = require('express');
const router = express.Router();
const Thoughts= require('../models/thoughts');

router.get('/', async (req, res) =>{
  try {
    const thoughts = await Thoughts.find();
    res.json(thoughts);
    
  } catch (error) {
    res.json({message:error})
  }
});
router.post('/', async (req, res) =>{
  const thoughts = new Thoughts({
    title: req.body.title,
    thought: req.body.thought,
  });
  try {
    const t1= await thoughts.save();
    res.json(t1);
  } catch (error) {
    res.json({message:error});
  }
});
module.exports=router;