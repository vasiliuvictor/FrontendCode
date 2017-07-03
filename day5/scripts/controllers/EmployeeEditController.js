hrApp.controller('EmployeeEditController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactory','EmployeeService',
    function ($scope, $http, $routeParams, $location, CommonResourcesFactory,EmployeeService) {
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR5

        $scope.departments =[];
        $scope.managers=[];
        $scope.employees=[];
        $scope.jobs =[];

        /**
         * Reset form
         */
        $scope.reset = function () {
            $scope.employee = {};
        };

        EmployeeService.findById($routeParams.employeeId)
            .then(function (res) {
                $scope.employee = res.data;
            }, function (err) {
                console.log("Error at employees/findOne: " + err);
            });
        $scope.edit =function() {
            $http({url: CommonResourcesFactory.findOneEmployeeUrl, method: 'GET'})
                .success(function (data, status, headers, config) {
                    $scope.employees = data;
                });
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
        };
        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: commonResourcesFactory.editEmployeeUrl, method: 'PUT', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern =  /^[0]\.\d{1}(\d)?$/;

    }]);