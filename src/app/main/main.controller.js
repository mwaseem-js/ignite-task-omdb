(function () {
    'use strict';

    angular
        .module('omdbApp')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController(OmdbService) {
        var vm = this;
        vm.msg = "hi";
        vm.fetch = function () {
            OmdbService.fetch(vm.searchParam).then(function (response) {
                if (response.data.Response) {
                    // success

                    var theSrchResults = response.data["Search"];
                    angular.forEach(theSrchResults, function (obj) {
                        // loop through each movie, and pull the details using the IMDB ID
                        OmdbService.details(obj).then(function (response) {
                            // extend the details to the parent
                            obj.details = response.data;
                        });
                    });
                    vm.movieResult = theSrchResults;
                } else {
                    //error, movie not found
                    console.log("not found");

                }
            }).catch(function (response) {
                console.log("failure");

            });
        }
    }
})();
