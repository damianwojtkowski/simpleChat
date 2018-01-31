var app = angular.module('chat', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/login.html',
    controller: 'loginCtrl',
    controllerAs: 'login'
  })
  .otherwise('/');
  $locationProvider.html5Mode(true);
});
