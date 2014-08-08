var express = require('express');
var router = express.Router();
var conf = require('./../conf')();
var data = require('./../data')();

/* Home Page */
router.get('/', function(req, res) {
  res.render('index',{'conf':conf,'data':data});
});

/* About Page */
router.get('/about', function(req, res) {
  res.render('about',{'conf':conf});
});

router.get('/error', function(req, res) {
  res.render('error',{'conf':conf});
});

module.exports = router;
