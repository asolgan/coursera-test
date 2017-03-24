(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Category list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/menu-categories.template.html',
    controller: 'CategoriesController as categories',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories()
        .then(function(response) {
          return response.data;
        });
      }]
    }
  })

  // Category items page
  .state('items', {
    url: '/items/{category}',
    templateUrl: 'src/menuapp/templates/category-items.template.html',
    controller: 'CategoryItemsController as category',
    resolve: {
      menucategory: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.category)
        .then(function(response) {
          return response.data;
        });
      }]
    }
  });
}

})();
