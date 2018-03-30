'use strict';
module.exports = function(app) {
  var carController = require('../controllers/carController');

  // car routes
  app.route('/cars')
    .get(carController.list_all_cars)
    .post(carController.create_a_car);
};
