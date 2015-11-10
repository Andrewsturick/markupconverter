'use strict';

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var marked = require('marked');
var app = express();
var HTMLparser = require('htmlparser');

app.set('view engine', 'jade');

app.use(express.static('public'));

app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.post('/markdown', function(req, res){
  console.log(marked(req.body.string));
  res.send(marked(req.body.string));
})

app.get('/markdown', function(req,res){
  res.render('index');

});

app.listen(3000);
