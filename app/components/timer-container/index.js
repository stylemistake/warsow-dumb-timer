var angular = require('angular');
var _ = require('lodash');

require('./component.scss');

@angular.decorators.directive('timer-container')
class TimerContainer {

  constructor() {
    this.template = require('./component.html');
    this.restrict = 'E';
    this.transclude = true;
  }

  link(scope, element, attrs) {
    // ...
  }

}

module.exports = TimerContainer;
