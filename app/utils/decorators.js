var angular = require('angular');
var _ = require('lodash');

module.exports = function (app) {

  var decorators = {};
  var register = require('./register.js')(app);

  decorators.directive = function (name) {
    return function (target) {
      register.directive(_.camelCase(name), target);
      return target;
    };
  };

  decorators.service = function (name) {
    return function (target) {
      register.service(name, target);
      return target;
    };
  };

  decorators.inject = function (deps) {
    return function (target) {
      // Assign dependencies to the class
      target.$inject = deps;
      return target;
    };
  };

  return decorators;

};
