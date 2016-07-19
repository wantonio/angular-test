(function(){
var Eggly = angular.module('Eggly', []);

Eggly.controller('MainCtrl', function($scope){
  //states
  var STATES = {
    CREATING: 'CREATING',
    EDITING: 'EDITING'
  };

  Object.freeze(STATES);

  $scope.states = {
    isCreating: false,
    isEditing: false
  };

  $scope.currentState = null;

  $scope.startCreating = function(){
    $scope.currentState = STATES.CREATING;
    $scope.states.isCreating = true;
    $scope.states.isEditing = false;
  };

  $scope.startEditing = function(){
    $scope.currentState = STATES.EDITING;
    $scope.states.isCreating = false;
    $scope.states.isEditing = true;
  };

  $scope.cancelState = function(){
    $scope.currentState = null;
    $scope.states.isEditing = $scope.states.isCreating = false;
  };

  $scope.shouldShowCreating = function(){
    return $scope.currentCategory && $scope.currentState != STATES.EDITING;
  };
  // crud

  $scope.newBookMark = {};

  var resetCreateForm = function(){
    $scope.newBookMark = {};
  }

  $scope.createBookmark = function(){
    $scope.newBookMark.id = $scope.bookmarks.length;
    $scope.newBookMark.category = $scope.currentCategory.name;

    $scope.bookmarks.push($scope.newBookMark);

    console.dir($scope.newBookMark);
    resetCreateForm();

  };

  $scope.editedBookmark = null;

  $scope.setEditedBookmark = function(bookmark){
    $scope.editedBookmark = angular.copy(bookmark);
  };

  $scope.updateBookmark = function(bookmark){
    var index = $scope.bookmarks.findIndex(function(b){
      return b.id == bookmark.id;
    });

    $scope.bookmarks[index] = bookmark;
    $scope.editedBookmark = null;
    $scope.cancelState();
  };

  $scope.deleteBookmark = function(bookmark){
    var index = $scope.bookmarks.findIndex(function(b){
      return b.id == bookmark.id;
    });

    $scope.bookmarks.splice(index, 1);
  };

  //categories
  $scope.currentCategory = null;

  $scope.setCurrentCategory = function(category){
    $scope.currentCategory = category;
    $scope.cancelState();
  };

  $scope.isCurrentCategory = function(category){
    return $scope.currentCategory && $scope.currentCategory.name === category.name;
  };

  $scope.categories = [
    {"id": 0, "name": "Development"},
    {"id": 1, "name": "Design"},
    {"id": 2, "name": "Exercise"},
    {"id": 3, "name": "Humor"}
  ];

  

});

})();
