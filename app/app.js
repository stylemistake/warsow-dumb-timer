var angular = require('angular');
var _ = require('lodash');

// Initialize our app
var app = angular.module('timer', []);

// Add decorators to angular
angular.decorators = require('./utils/decorators.js')(app);

// Load services
require('./services/TimerService.js');

// Load components
require('./components/timer-container');
require('./components/timer-item');

// Final setup
app.run(() => {
  // Enable wake-lock
  angular.element(document).ready(() => {
    require('./utils/nosleep.js').enable();
  });
});
