hrApp.controller('EmployeeAddController', ['$scope', '$http', '$location', 'CommonResourcesFactory','EmployeeService',
    function($scope, $http, $location, CommonResourcesFactory,EmployeeService) {
        $scope.employee = {};
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR1
        $scope.departments =[];
        $scope.managers=[];
        $scope.managers1=[];
        $scope.jobs =[];


        var promise = EmployeeService.findManagers();
        promise.then(
            function(payload){
                $scope.managers = payload.data;

                for(var i in $scope.managers1){

                    if($scope.managers1[i].managerId != null)
                    {
                        var k= 0;
                        for(var j in $scope.managers)
                        {
                            if($scope.managers[i].managerId.employeeId ==$scope.managers[j].employeeId){
                                k = 1;
                            }
                        }
                        if(k==0){
                            $scope.managers.push(angular.copy($scope.managers1[i].managerId));
                        }
                    }

                }
            }
        );
        var promise1 = EmployeeService.findJobs();
        promise1.then(
            function(payload){
                $scope.jobs = payload.data;
            }
        );
        var promise2 = EmployeeService.findDepartments();
        promise2.then(
            function(payload){
                $scope.departments = payload.data;
            }
        );



        /**
         * Reset form
         */
        $scope.reset = function () {
            this.employee = {};



        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: CommonResourcesFactory.addEmployeeUrl, method: 'POST', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern = /^[0]\.\d{1}(\d)?$/;
}]);