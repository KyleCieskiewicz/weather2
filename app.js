angular.module('app', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
         .state('home',{
             url:'/',
             templateUrl: "/templates/home.html",
             controller: "homeController"
         })
         .state('weather',{
             url:'/weather/:name',
             templateUrl: "/templates/weather.html",
             controller: "weatherController"
         })
         .state('yourForecast',{
             url:'/theForecast/:city',
             templateUrl: "/templates/forecast.html",
             controller: "forecastController"
         })   
  
      $urlRouterProvider
          .otherwise('/');
  });