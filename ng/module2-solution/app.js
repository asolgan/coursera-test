(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var tbc = this;

  tbc.items = ShoppingListCheckOffService.getToBuyItems();

  tbc.buyItem = function(itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var abc = this;
  abc.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  var toBuyList = [
    { name: 'cookies', quantity: 100},
    { name: 'candies', quantity: 200},
    { name: 'chocolates', quantity: 5},
    { name: 'ice cream', quantity: 2},
    { name: 'pudding', quantity: 4}
  ];
  var alreadyBoughtLlist = [];

  service.buyItem = function(itemIndex) {
    alreadyBoughtLlist.push(toBuyList.splice(itemIndex, 1)[0]);
  };

  service.getToBuyItems = function() {
    return toBuyList;
  };
  service.getAlreadyBoughtItems = function() {
    return alreadyBoughtLlist;
  };
}
})();
