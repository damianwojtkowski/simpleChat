var app = angular.module('chat', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/app.html',
    controller: 'chatCtrl',
    controllerAs: 'chat'
  })
  .otherwise('/');
  $locationProvider.html5Mode(true);
});
