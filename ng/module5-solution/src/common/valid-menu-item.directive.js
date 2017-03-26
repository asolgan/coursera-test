(function () {
"use strict";

  angular.module('common')
  .directive('validMenuItem', MenuItemValidator);

  MenuItemValidator.$inject = ['MenuService', '$q']
  function MenuItemValidator(MenuService, $q) {
    return {
      require: 'ngModel',
      link: function(scope, element, attrs, ngModel) {
        ngModel.$asyncValidators.validMenuItem = function(modelValue, viewValue) {
          return MenuService.getMenuItem(viewValue)
          .then( function(data) {
              return true;
            }
          )
          .catch( function(error) {
            return $q.reject(error);
          });
        };
      }
    };
  }

})();
