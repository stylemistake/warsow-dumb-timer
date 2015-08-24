var angular = require('angular');
var _ = require('lodash');

require('./component.scss');

@angular.decorators.directive('timer-container')
class TimerContainer {

  constructor() {
    this.restrict = 'E';
  }

  link(scope, element, attrs) {
    // ...
  }

}

module.exports = TimerContainer;
