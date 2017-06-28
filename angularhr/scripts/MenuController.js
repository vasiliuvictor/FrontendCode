angular.module('hrApp').controller('MenuController', ['$scope',
    function($scope) {
        $scope.demoActionList =[{

            label: "OtherScope",
            url: "views/childscope.html"
        },{
            label: "Demo Action",
            url: "views/demomath.html"
        }];
    }]);
