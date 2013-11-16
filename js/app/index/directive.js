MyApp.directive('deleteButton', [
    function() {
      return {
        restrict: 'E',
        template: '<button type="button" class="btn btn-danger btn-xs" ng-click="remove()">Delete</button>',
        scope: {
          remove: '&'
        },
        replace: true,
        link: function($scope, element, attr) {
        }
      };
    }
    ]);
