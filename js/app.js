'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/intro', {templateUrl: 'partials/intro.html', controller: GenericViewCtrl});
    $routeProvider.when('/tech_a', {templateUrl: 'partials/tech_a.html', controller: GenericViewCtrl});
    $routeProvider.when('/tech_b', {templateUrl: 'partials/tech_b.html', controller: GenericViewCtrl});
    $routeProvider.when('/tech_c', {templateUrl: 'partials/tech_c.html', controller: GenericViewCtrl});
    $routeProvider.when('/contact', {templateUrl: 'partials/contact.html', controller: ContactViewCtrl});
    $routeProvider.otherwise({redirectTo: '/intro'});
  }]);
