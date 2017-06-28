/**
 * Created by Claudiu.Marinescu on 6/28/2017.
 */
angular.module('hrApp').controller('DescriptionController', ['$rootScope','$scope',
    function($rootScope, $scope) {
        $scope.title ='Two Way Binding Demo';
        $scope.childtemplate = 'templates/childscope.html';
        $scope.descriptionShow = false;

        $scope.resetFirstVariable = function() {
            $scope.firstVariable = undefined;
        };
        $scope.setFirstVariable = function(val) {
            $scope.firstVariable = val;
        };
        $scope.toggleDescriptionShow = function () {
            $scope.descriptionShow = !$scope.descriptionShow ;
        }

    }]);