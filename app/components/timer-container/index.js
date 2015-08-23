var angular = require('angular');
var _ = require('lodash');

require('./component.scss');

@angular.decorators.directive('timer-container')
class TimerContainer {

  constructor() {
    this.template = require('./component.html');
    this.restrict = 'E';
  }

  link(scope, element, attrs) {
    console.log('linked!');
  }

}

module.exports = TimerContainer;
