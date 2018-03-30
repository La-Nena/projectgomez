'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CarSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the car'
  },
  price: {
    type: String
  }
});

module.exports = mongoose.model('Cars', CarSchema);