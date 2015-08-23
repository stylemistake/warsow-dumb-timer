var angular = require('angular');
var _ = require('lodash');

module.exports = function (app) {

  var decorators = {};
  var register = require('./register.js')(app);

  decorators.directive = function (name) {
    return function (target) {
      register.directive(_.camelCase(name), target);
    };
  };

  return decorators;

};
