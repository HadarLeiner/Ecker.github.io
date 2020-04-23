var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('layuot', {
    title: 'Ecker',
    page: 'index'
  });
});
router.get('/Projekte', function (req, res, next) {
  res.render('layuot', {
    title: 'Ecker_Projekte',
    page: 'Projekte'
  });
});
router.get('/UberUns', function (req, res, next) {
  res.render('layuot', {
    title: 'Ecker_Über uns',
    page: 'UberUns'
  });
});
router.get('/Leistungen', function (req, res, next) {
  const areas = ["Berlin", "München", "Stuttgart", "Leipzig", "Und viele mehr"]
  const s = req.query.s || '';
  res.render('layuot', {
    title: 'Ecker_Leistungen',
    page: 'Leistungen',
    areas: areas.filter(name => name.toLowerCase().includes(s))
  });
});
module.exports = router;