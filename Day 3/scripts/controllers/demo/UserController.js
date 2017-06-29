hrApp.controller('UserController', ['$scope', '$http', '$routeParams', '$location','inputList',
    function($scope, $http, $routeParams, $location,inputList) {

    $scope.inputList = inputList;
    $scope.user ={};

    $scope.save = function(){
        inputList.push(angular.copy($scope.user));



    }


        $scope.back = function() {

            $location.url('/#');

        }
        $scope.reset=function () {
            $scope.user.firstName='';
            $scope.user.lastName='';
            $scope.user.cnp='';
            $scope.user.age='';

        }

    }]);