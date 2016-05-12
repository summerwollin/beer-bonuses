(function() {
  'use strict';

  angular.module('app', ['ngRoute'])
    .config(function($routeProvider, $locationProvider) {
      $routeProvider
       .when('/', {
        templateUrl: '/templates/home.html',
        controller: 'HomeController',
      })
      .when('/signup', {
        // component: 'ComponentName', OR
        // templateUrl: '<my-app></my-app>'
        templateUrl: '/templates/signup.html',
        controller: 'SignupController'
      });

      $locationProvider.html5Mode(true);
    });

}());
