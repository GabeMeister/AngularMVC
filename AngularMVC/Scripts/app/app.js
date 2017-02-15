//RIGHT HERE
var app = angular.module('myapp', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/templates/home.html',
            controller: 'HomeController'
        })
        .when('/home', {
            templateUrl: '/templates/home.html',
            controller: 'HomeController'
        })
        .when('/search', {
            templateUrl: '/templates/search.html',
            controller: 'SearchController'
        })
        .when('/chart', {
            templateUrl: '/templates/chart.html',
            controller: 'ChartController'
        }).
        otherwise({
            templateUrl: '/templates/error.html',
            controller: 'ErrorController'
        });

    $locationProvider.html5Mode(true);
});