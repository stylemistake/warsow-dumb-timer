var angular = require('angular');
var _ = require('lodash');

// Initialize our app
var app = angular.module('timer', []);

// Add decorators to angular
angular.decorators = require('./utils/decorators.js')(app);

// Load components
require('./components/timer-container');
