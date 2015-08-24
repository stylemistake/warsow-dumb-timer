var angular = require('angular');
var _ = require('lodash');

@angular.decorators.service('TimerService')
@angular.decorators.inject(['$interval'])
class TimerService {

  constructor($interval) {
    this.timers = [];
    $interval(() => _.each(this.timers, (timer) => timer()), 1000);
  }

  onTick(fn) {
    this.timers.push(fn);
  }

}

module.exports = TimerService;
