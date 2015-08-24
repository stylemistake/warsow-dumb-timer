var angular = require('angular');
var _ = require('lodash');

@angular.decorators.service('TimerService')
@angular.decorators.inject(['$rootScope'])
class TimerService {

  constructor($rootScope) {
    this.timers = [];
    setInterval(() => {
      _.each(this.timers, (timer) => timer());
      $rootScope.$apply()
    }, 1000);
  }

  onTick(fn) {
    this.timers.push(fn);
  }

}

module.exports = TimerService;
