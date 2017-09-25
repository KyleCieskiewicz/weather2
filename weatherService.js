angular.module('app').service('weatherService', function($http){

this.weatherResult = function(city){
    
    return $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&APPID=1de17c588271d44fcbdf0b93a48a6165')
}
// }
})