'use strict';

var mongoose = require('mongoose'),
  Car = mongoose.model('Cars');

exports.list_all_cars = function(req, res) {
    Car.find({}, function(err, car) {
    if (err)
      res.send(err);
    res.json(car);
  });
};

exports.create_a_car = function(req, res) {
    var new_car = new Car(req.body);
    new_car.save(function(err, car) {
      if (err)
        res.send(err);
      res.json(car);
    });
  };
  