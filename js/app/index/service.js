MyApp.service("eventsService", 
    ["$http",
    function($http) {
      this.events = function() {
        return $http.get('/events.json');
      };
    }
    ]);
