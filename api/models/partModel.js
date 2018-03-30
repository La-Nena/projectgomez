'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PartSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the part'
  },
  price: {
    type: String
  }
});

module.exports = mongoose.model('Parts', PartSchema);