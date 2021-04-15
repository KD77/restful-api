const express = require('express');
const mongoose= require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config')
const app = express();


mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser:true,useUnifiedTopology: true});
const con = mongoose.connection;

con.on('open', ()=>{
  console.log('mongoose connected ...')
})
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

const artRouter = require('./routes/artPeices')
app.use('/artPeices', artRouter)

app.listen(3000, ()=>{
  console.log('Server started')
});