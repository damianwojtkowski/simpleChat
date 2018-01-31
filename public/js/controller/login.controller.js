(function (app) {
  app.controller('loginCtrl', function () {
    var vm = this;

    vm.login = function () {
      console.log(vm.loginName);
    };
  });
})(app);
