var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function(req, res) {
  models.Hotel.find(function(err, results){
    res.render('index', { hotels: results, title: "Trip Planner" });
  });
});

// router.get('/', function(req, res) {
//   models.Place.find(function(err, results){
//     res.render('index', { places: results, title: "Trip Planner" });
//   });
// });

// router.get('/', function(req, res) {
//   models.Restaurant.find(function(err, results){
//     res.render('index', { restaurants: results, title: "Trip Planner" });
//   });
// });

// router.get('/', function(req, res) {
//   models.ThingsToDo.find(function(err, results){
//     res.render('index', { thingsToDo: results, title: "Trip Planner" });
//   });
// });

module.exports = router;
