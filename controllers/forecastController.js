angular.module('app').controller('forecastController', function($scope, $stateParams, forecastService) {
    $scope.city = "";
    forecastService.forecastResult($stateParams.city).then(function(res) { 
        var days = res.list;
        var thedays = [];
        var day = days[0].dt_txt.substring(1, 10);
        
    for (var i = 0; i < days.length-2; i++) {
        
        if (days[i].dt_txt.substring(1, 10) !== day){
        thedays.push(days[i]);
        day = days[i].dt_txt.substring(1, 10);
        }
    }
        $scope.days = thedays;

    });

    
});