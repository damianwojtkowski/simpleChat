(function (app) {
  app.controller('loginCtrl', function () {
    var vm = this;
    vm.isLogged = false;

    var socket = io();

    vm.login = function () {
      socket.emit('login', { login: vm.loginName });
    };
  });
})(app);
