(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryItemsController', CategoryItemsController);

CategoryItemsController.$inject = ['menucategory'];
function CategoryItemsController(menucategory) {
  var category = this;
  category.items = menucategory.menu_items;
  category.categoryName = menucategory.category.name;
}

})();
