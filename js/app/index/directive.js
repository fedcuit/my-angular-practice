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


MyApp.directive('attentionOnHover', [
    function(){
      return {
        link: function($scope, element, attr) {
                element.hover(function(){
                  element.parent('tr').addClass('danger');
                }, function(){
                  element.parent('tr').removeClass('danger');
                });
              }
      };
    }]);
