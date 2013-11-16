MyApp.controller("eventsController", 
    ["$scope", "eventsService",
    function($scope, eventsService) {
      var initEvents = function(events) {
        $scope.events = events;
      };

      $scope.init = function() {
        eventsService.events(initEvents);
      };

      $scope.remove = function(index) {
        $scope.events.splice(index, 1);
      };
    }
    ]);
