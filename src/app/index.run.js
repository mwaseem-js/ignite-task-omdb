(function() {
  'use strict';

  angular
    .module('omdbApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
