var express = require('express');
var router = express.Router();
var models = require('../models');

// /* GET home page. */
// var hotelFinder = function(req, res, next) {
//     models.Hotel.find({}, function(err, hotels) {
//       if(err) return next(err);
//       res.locals.hotels = hotels;
//       next();
//     });
//   };

// var thingsToDoFinder = function(req, res, next) {
//   models.ThingsToDo.find({}, function(err,things) {
//     if(err) return next(err);
//     res.locals.things_to_do = things;
//     next();
//   });
// };

// var restaurantsFinder = function(req, res, next) {
//   models.Restaurant.find({}, function(err,restaurants) {
//     if(err) return next(err);
//     res.locals.restaurants = restaurants;
//     next();
//   });
// };

// router.get('/', [
//   hotelFinder,
//   thingsToDoFinder,
//   restaurantsFinder,
//   function(req,res,next) {
//     res.render('index');
//   }
// ]);

/* GET home page. */
router.get('/', function(req, res) {
    models.Hotel.find(function(err, hotels) {
        models.Restaurant.find(function(err, restaurants) {
            models.ThingsToDo.find(function(err, thingsToDos) {
                    res.render('index', {
                        hotels: hotels,
                        restaurants: restaurants,
                        thingsToDos: thingsToDos,
                    });
                });
            });
        });
    });


module.exports = router;
