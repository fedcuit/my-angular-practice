MyApp.service("eventsService", 
    ["$http",
    function($http) {
      this.events = function(callback) {
        $http.get('/events.json')
          .success(function(data){
            callback(data);
          });
      };
    }
    ]);
