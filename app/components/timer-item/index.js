var angular = require('angular');
var _ = require('lodash');

require('./component.scss');

@angular.decorators.directive('timer-item')
@angular.decorators.inject(['$timeout', 'TimerService'])
class TimerItem {

  constructor($timeout, TimerService) {
    this.template = require('./component.html');
    this.restrict = 'E';
    this.scope = {
      duration: '&',
    };
    this.currentScope = null;
    this.$timeout = $timeout;
    this.TimerService = TimerService;
  }

  reset(scope) {
    var duration = scope.duration() || 25;
    scope.time = duration;
  }

  decrement(scope) {
    scope.pulse = true;
    scope.time -= 1;
    if (!scope.time) {
      this.reset(scope);
    }
    this.$timeout(() => {
      scope.pulse = false;
    }, 750);
  }

  link(scope, element, attrs) {
    this.currentScope = scope;
    this.reset(scope);
    this.TimerService.onTick(() => {
      this.decrement(scope);
    });
  }

}

module.exports = TimerItem;
