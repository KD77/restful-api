const mongoose = require('mongoose')

const thoughtsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  thought: {
    type: String,
    required: true
  }
});


module.exports=mongoose.model('Thoughts',thoughtsSchema);