(function (app) {
  app.controller('chatCtrl', function (socketFactory) {
    var vm = this;
    vm.users = [];
    
    vm.isLogged = false;

    socketFactory.on('users', function (data) {
      vm.users = data;
    });

    vm.login = function () {
      socketFactory.emit('login', { login: vm.loginName });
      vm.users.push(vm.loginName);
      vm.isLogged = true;
    };
  });
})(app);
