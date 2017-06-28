angular.module('hrApp').controller('MenuController', ['$scope',
    function($scope) {
        $scope.employeeList =[{

            name: "Haraga George",
            salary: "2800"
        },{
            name: "Marinescu Claudiu",
            salary: "4800"
        },{
            name: "Vasiliu Victor",
            salary: "2800"
        }];
    }]);
