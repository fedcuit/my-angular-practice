MyApp.controller("eventsController", 
    ["$scope", "$compile",  "eventsService",
    function($scope, $compile, eventsService) {
      $scope.pageSize = 10;
      $scope.currentPage = 0;
      $scope.init = function() {
        eventsService.events().then(function(response) {
          $scope.events = response.data;
          $scope.pageNumbers = Math.ceil($scope.events.length / $scope.pageSize);
        });
      };

      $scope.first = function()  {
        $scope.currentPage = 0;
      };

      $scope.next = function() {
        if ($scope.lastPage()) return;
        $scope.currentPage += 1;
      };

      $scope.previous = function() {
        if ($scope.firstPage()) return;
        $scope.currentPage -= 1;
      };

      $scope.last = function() {
        $scope.currentPage = $scope.pageNumbers - 1;
      };

      $scope.firstPage = function() {
        return $scope.currentPage == 0;
      };

      $scope.lastPage = function() {
        return $scope.currentPage == $scope.pageNumbers - 1;
      };

      $scope.remove = function(index) {
        $scope.events.splice(index, 1);
      };
    }
    ]);
