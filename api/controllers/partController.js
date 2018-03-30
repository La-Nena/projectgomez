'use strict';

var mongoose = require('mongoose'),
  Part = mongoose.model('Parts');

exports.list_all_parts = function(req, res) {
    Part.find({}, function(err, part) {
    if (err)
      res.send(err);
    res.json(part);
  });
};

exports.create_a_part = function(req, res) {
    var new_part = new Part(req.body);
    new_part.save(function(err, part) {
      if (err)
        res.send(err);
      res.json(part);
    });
  };
  