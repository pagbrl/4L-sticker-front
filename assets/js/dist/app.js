// app.js

// define our application and pull in ngRoute
var app = angular.module('app', ['ngRoute']);

// ROUTING ===============================================
// set our routing for this application
// each route will pull in a different controller
app.config(function($routeProvider, $locationProvider) {

    $routeProvider
        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'homeCtrl'
        })
        // about page
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'aboutCtrl'
        })

        .otherwise({'redirectTo':'/'});

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
});

app.service('promiseTest', function($http, $q){
    this.url = "https://api.twitch.tv/kraken/channels/domingo";
    this.dataTwitch = {};
    var self = this;

    this.getTwitchData = function(url){
        var deferred = $q.defer();

        $http.get(url)
            .success(function(data, status){
                var dataTwitch = data;
                deferred.resolve(dataTwitch);
            })
            .error(function(data, status){
                deferred.reject('error');
            })
        return deferred.promise;
    };

});

// CONTROLLERS ============================================
// main controller
app.controller('mainCtrl', function($scope, $location, promiseTest) {

    var url = "https://api.twitch.tv/kraken/channels/domingo";
    $scope.test = promiseTest.getTwitchData(url).then(function(dataTwitch){
        $scope.test = dataTwitch;
    }, function(msg){
        alert(msg);
    });

    // Active link menu
    $scope.$on('$routeChangeStart', function(next, current) { 
        $scope.currentUrl = $location.path();
    });
});

// home page controller
app.controller('homeCtrl', function($scope, $rootScope) {
    $rootScope.bodyClass = 'page-home';
    $rootScope.pageTitle = 'Angular base - home';
});

// about page controller
app.controller('aboutCtrl', function($scope, $rootScope) {
    $rootScope.bodyClass = 'page-about';
    $rootScope.pageTitle = 'Angular base - about';
});

$(document).ready(function() {

});
