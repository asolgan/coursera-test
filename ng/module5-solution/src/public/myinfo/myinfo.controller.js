(function () {

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['SignUpService', 'MenuService'];
function MyInfoController(SignUpService, MenuService) {
  var myInfoCtrl = this;

  myInfoCtrl.user = SignUpService.getUser();

  if (myInfoCtrl.user) {
    MenuService.getMenuItem(myInfoCtrl.user.favorite)
    .then( function(data) {
      myInfoCtrl.favoriteItem = data;
    });
  }

}

})();
