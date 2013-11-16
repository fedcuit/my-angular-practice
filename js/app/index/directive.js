MyApp.directive('deleteButton', [
    function() {
      return {
        restrict: 'E',
        template: '<button type="button" class="btn btn-danger btn-xs" ng-click="close()">Delete</button>',
        scope: {
          close: '&'
        },
        replace: true,
        link: function($scope, element, attr) {
        }
      };
    }
    ]);
