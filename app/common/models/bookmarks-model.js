angular.module('eggly.models.bookmarks', [])
  .service('BookmarksModel', function($http) {
    var model = this,
      URL = {
        FETCH: 'data/bookmarks.json'
      };

    function extract(result) {
      return result.data;
    }

    function cacheCategories(result) {
      categories = extract(result);
      return categories;
    }

    model.getBookmarks = function() {
      return $http.get(URL.FETCH).then(cacheCategories);
    }
  });
