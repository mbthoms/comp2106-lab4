var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lab 4 - Family' });
});

/* GET Matthew's Page. */
router.get('/matthew', function(req, res, next) {
  res.render('matthew', { title: 'Matthew', job: 'Student/Web Designer' });
});

/* GET Wes' Page. */
router.get('/wes', function(req, res, next) {
  res.render('wes', { title: 'Wes', job: 'Print Broker' });
});

/* GET Christeena's Page. */
router.get('/christeena', function(req, res, next) {
  res.render('christeena', { title: 'Christeena', job: 'Cat Breeder' });
});

/* GET Jesse's Page. */
router.get('/jesse', function(req, res, next) {
  res.render('jesse', { title: 'Jesse', job: 'employee at Tim Hortons' });
});


module.exports = router;
