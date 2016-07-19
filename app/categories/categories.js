angular.module('categories', [
  'eggly.models.categories'
])
  .config(function($stateProvider){
    $stateProvider
      .state('eggly.categories',{
        url: '/',
        views: {
          'categories@': {
            controller: 'CategoriesLisCtrl as categoriesListCtrl',
            templateUrl: 'app/categories/categories.tmpl.html'
          }
        }
      })
  })
  .controller('CategoriesLisCtrl', function($scope, CategoriesModel){
    var categoriesListCtrl = this;
    CategoriesModel.getCategories().then(function(result){
      categoriesListCtrl.categories = result;
    });
  });
