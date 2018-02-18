(function (app) {
  app.controller('chatCtrl', function (socketFactory) {
    var vm = this;
    vm.users = [];
    
    vm.isLogged = false;

    vm.login = function () {
      socketFactory.emit('init', { login: vm.loginName });
      vm.isLogged = true;
    };

    socketFactory.on('newUser', function (data) {
      vm.users.push(data);
    });

    socketFactory.on('init', function (data) {
      vm.users = data;
      vm.users.push(vm.loginName);
    });

  });
})(app);
