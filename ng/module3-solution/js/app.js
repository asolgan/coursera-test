(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'menuitems.html',
    restrict: 'E',
    scope: {
      foundItems: '<',
      onRemove: '&'
    }
  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;
  menu.searchTerm="";
  menu.found = [];
  menu.nothingFound=false;

  menu.narrowItDown = function (){
    if (!menu.searchTerm.trim()) {
      menu.nothingFound = true;
      return;
    }

    MenuSearchService.getMatchedMenuItems(menu.searchTerm)
      .then(function (foundItems) {
        menu.found = foundItems;
        menu.nothingFound = menu.found.length == 0;
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });
  };

  menu.removeItem = function (index) {
    menu.found.splice(index, 1);
  };

}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function(response) {
      return response.data.menu_items
        .filter(p=>p.name.toLowerCase().indexOf(searchTerm) != -1);
    });
  };
}

})();
