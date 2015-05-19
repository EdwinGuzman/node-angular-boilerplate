/*jslint nomen: true, indent: 2, maxlen: 80 */
/*globals angular, window */

angular
  .module('app_name', [
    'ngSanitize',
    'ui.router',
    'ngAnimate',
    'angulartics',
    'angulartics.google.analytics'
  ])
  .constant('_', window._)
  .config([
    '$analyticsProvider',
    '$locationProvider',
    '$stateProvider',
    '$urlRouterProvider',
    function ($analyticsProvider, $locationProvider, $stateProvider, $urlRouterProvider) {
      'use strict';

      // Turn off automatic virtual pageviews for GA.
      // In $stateChangeSuccess, /locations/ is added to each page hit.
      $analyticsProvider.virtualPageviews(false);

      // uses the HTML5 History API, remove hash (need to test)
      $locationProvider.html5Mode(true);

      $urlRouterProvider.rule(function ($injector, $location) {
        var path = $location.url();

        // Remove trailing slash if found
        if (path[path.length - 1] === '/') {
          return path.slice(0, -1);
        }
      });

      $urlRouterProvider.otherwise('/404');
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'views/homepage.html',
          controller: 'homeCtrl'
        })
        .state('404', {
          url: '/404',
          templateUrl: 'views/404.html'
        });
    }
  ]);

