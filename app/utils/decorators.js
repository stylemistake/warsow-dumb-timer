var angular = require('angular');
var _ = require('lodash');

module.exports = function (app) {

  var decorators = {};
  var register = require('./register.js')(app);

  decorators.directive = function (name) {
    return (target) => {
      register.directive(_.camelCase(name), target);
      return target;
    };
  };

  decorators.service = function (name) {
    return (target) => {
      register.service(name, target);
      return target;
    };
  };

  decorators.inject = function (deps) {
    return (target) => {
      target.$inject = deps;
      return target;
    };
  };

  return decorators;

};
