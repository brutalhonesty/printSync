'use strict';

var printSyncApp = angular.module('printSyncApp', ['ngCookies', 'ngResource', 'ngSanitize', 'ngRoute']).config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/main',
      controller: 'MainCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
});