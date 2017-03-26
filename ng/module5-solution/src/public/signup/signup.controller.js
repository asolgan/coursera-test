(function () {

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['SignUpService'];
function SignUpController(SignUpService) {
  var reg = this;

  reg.user = SignUpService.getUser();
  if (!reg.user) {
    reg.user = inituser();
  }

  reg.formSaved = false;

  reg.submit = function () {
    reg.formSaved = true;
    SignUpService.setUser(reg.user);
  };

  function inituser() {
    var user = {};
    user.firstname = "";
    user.lastname = "";
    user.email = "";
    user.phone = "";
    user.favorite = "";
    return user;

  }
}

})();
