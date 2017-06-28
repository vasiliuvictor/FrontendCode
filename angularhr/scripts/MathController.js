angular.module('hrApp').controller('MathController', ['$scope',
    function($scope) {
        $scope.add = function(){
            $scope.suma=$scope.numberA + $scope.numberB;
        }
        $scope.subtract = function(){
            $scope.subt=$scope.numberA - $scope.numberB;
        }
        $scope.multiplicate = function(){
            $scope.mult=$scope.numberA * $scope.numberB;
        }
        $scope.divide = function(){
            $scope.divi=$scope.numberA / $scope.numberB;
        }
    }]);
