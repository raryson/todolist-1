const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoClient = require('mongodb').MongoClient;

app.use(express.static('assets'));

app.set('view engine','ejs');

app.get('/', (req, res)=>{
    res.render('index');
});

app.listen(3000, ()=>{
    console.log('Ounvindo na 3000');
});