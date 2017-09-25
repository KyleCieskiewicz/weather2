angular.module('app').service('forecastService', function($http, $q) {

    this.forecastResult = function(city) {
        return $http({
            method: 'GET',
            url: 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial&APPID=1de17c588271d44fcbdf0b93a48a6165'
        }).then(function(response) {
            var res = response.data;
            return res;
        });
    };

});