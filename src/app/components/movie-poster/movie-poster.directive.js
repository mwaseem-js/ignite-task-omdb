(function () {
    'use strict';

    angular
        .module('omdbApp')
        .directive('moviePoster', function() {
            return {
                templateUrl: 'app/components/movie-poster/movie-poster.html'
            };
        });
})();
