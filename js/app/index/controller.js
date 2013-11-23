MyApp.controller("eventsController", 
    ["$scope", "$compile",  "eventsService",
    function($scope, $compile, eventsService) {
      $scope.init = function() {
        eventsService.events().then(function(response) {
          $scope.events = response.data;
        });
      };

      $scope.remove = function(index) {
        $scope.events.splice(index, 1);
      };
    }
    ]);
