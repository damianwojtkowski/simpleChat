var app = angular.module('chat', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/chat.html',
    controller: 'chatCtrl',
    controllerAs: 'chat'
  })
  .otherwise('/');
  $locationProvider.html5Mode(true);
});
