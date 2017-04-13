(function () {
    'use strict';

    angular
        .module('omdbApp')
        .factory('OmdbService', OmdbService);

    /** @ngInject */
    function OmdbService($http) {
        var omdbUrl = 'https://www.omdbapi.com/';
        return {
            fetch : function (searchParam) {
              return  $http({
                    method: "GET",
                    url: omdbUrl +"?s=" + searchParam + '&type=movie&r=json'
                });
            },
            details : function (obj) {
                return  $http({
                    method: "GET",
                    url:  omdbUrl + "?i=" +obj.imdbID + '&plot=full&r=json&tomatoes=true'
                });
            }
        }

    }
})();