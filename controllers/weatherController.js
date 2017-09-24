angular.module('app').controller('weatherController', function($scope, weatherService, $stateParams) {
    
    weatherService.weatherResult($stateParams.name).then(function(response){
        $scope.weather = response.data;
        
    })
    })