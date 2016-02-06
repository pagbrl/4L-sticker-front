// app.js

// define our application and pull in ngRoute
var app = angular.module('app', ['ngRoute', 'ngAnimate', 'loadingService']);

// ROUTING ===============================================
// set our routing for this application
// each route will pull in a different controller
app.config(function($routeProvider, $locationProvider, $httpProvider) {

    $routeProvider
        // home page
        .when('/', {
            templateUrl: 'views/home.php',
            controller: 'homeCtrl'
        })

        // direct donation page
        .when('/don', {
            templateUrl: 'views/donation.php',
            controller: 'directDonationCtrl'
        })

        // create sticker page
        .when('/sticker', {
            templateUrl: 'views/sticker.php',
            controller: 'stickerCtrl'
        })

        // valid checkout page
        .when('/valider', {
            templateUrl: 'views/donationValidation.php',
            controller: 'donationValidationCtrl'
        })

        // Other pages
        // CGU page
        .when('/CGU', {
            templateUrl: 'views/cgu.php',
            controller: 'cguCtrl'
        })

        .otherwise({'redirectTo':'/'});

    // use the HTML5 History API
    $locationProvider.html5Mode(true);

    // Loading site
    $httpProvider.responseInterceptors.push('myHttpInterceptor');
    var spinnerFunction = function (data, headers) {
        return data;
    };
    $httpProvider.defaults.transformRequest.push(spinnerFunction);
});

// Module loading http request
angular.module('loadingService', [], function ($provide) {
    $provide.factory('myHttpInterceptor', function ($q, $window) {
        return function (promise) {
            return promise.then(function (response) {
                $('section#loadingSite').fadeOut();
                return response;
            }, function (response) {
                $('section#loadingSite').fadeOut();
                return $q.reject(response);
            });
        };
    });
});
