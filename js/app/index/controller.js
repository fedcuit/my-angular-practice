MyApp.controller("eventsController", 
    ["$scope", "$compile",  "eventsService",
    function($scope, $compile, eventsService) {
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
