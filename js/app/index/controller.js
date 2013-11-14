MyApp.controller("eventsController", 
    ["$scope", "eventsService",
    function($scope, eventsService) {
      var initEvents = function(events) {
        $scope.events = events;
      };

      $scope.init = function() {
        eventsService.events(initEvents);
      };
    }
    ]);
