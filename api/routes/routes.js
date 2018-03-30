'use strict';
module.exports = function(app) {
  var carController = require('../controllers/carController'),
  partController = require('../controllers/partController');

  // car routes
  app.route('/cars')
    .get(carController.list_all_cars)
    .post(carController.create_a_car);

    app.route('/parts')
    .get(partController.list_all_parts)
    .post(partController.create_a_part)
};
