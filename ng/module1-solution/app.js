(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchList = "";
  $scope.message ="";
  $scope.messageColor="black";

  $scope.showMessage = function () {
    return "Yaakov likes to eat healthy snacks at night!";
  };

  $scope.checkLunchList = function () {
    var lunchSize = $scope.lunchList
      .split(',')
      .filter(s=>s.trim() !="")
      .length;
    if (lunchSize==0) {
      $scope.message="Please enter data first";
      $scope.messageColor="red";
    } else if(lunchSize <= 3) {
      $scope.message="Enjoy!";
      $scope.messageColor="green";
    } else {
      $scope.message="Too much!";
      $scope.messageColor="green";
    }
  };
}

})();
