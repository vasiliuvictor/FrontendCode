/**
 * Created by Claudiu.Marinescu on 6/28/2017.
 */
angular.module('hrApp').controller('ScopesController', ['$scope','$rootScope',
    function($scope, $rootScope) {
        $scope.title = 'Two Way Binding Demo';
        $scope.childtemplate = 'templates/childscope.html';
        $scope.resetFirstVariable = function() {
            $scope.firstVariable = undefined;
        };
        $scope.setFirstVariable = function(val) {
            $scope.firstVariable = val;
        };

    }]);