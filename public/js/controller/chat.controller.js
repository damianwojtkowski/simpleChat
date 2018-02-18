(function (app) {
  app.controller('chatCtrl', function (socketFactory) {
    var vm = this;
    vm.users = [];
    vm.messages = [];
    vm.newMessage = '';
    
    vm.isLogged = false;

    vm.login = function () {
      socketFactory.emit('init', { login: vm.loginName });
      vm.isLogged = true;
    };

    vm.addMessage = function () {
      vm.message = { user: vm.loginName, message: vm.newMessage };
      vm.newMessage = '';
      vm.messages.push(vm.message);
      socketFactory.emit('newMessage', vm.message);
    };

    socketFactory.on('newUser', function (data) {
      vm.users.push(data);
    });

    socketFactory.on('init', function (data) {
      vm.users = data;
      vm.users.push(vm.loginName);
    });

    socketFactory.on('newMessage', function (data) {
      vm.messages.push(data);
    })

  });
})(app);
