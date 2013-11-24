MyApp.filter('startFrom', [function() {
  return function(input, start) {
    if (angular.isUndefined(input)) {
      return [];
    }
    start = + start;
    return input.slice(start);
  };
}]);
