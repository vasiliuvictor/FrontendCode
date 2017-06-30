var finalapp = angular.module('finalapp', ['ngRoute']);

finalapp.config(['$routeProvider',function($routeProvider) {
    $routeProvider.when('/colors', {
        templateUrl: 'views/colors.html',
        controller: 'ColorController'
    })
        .when('/form', {
        templateUrl: 'views/form.html',
        controller: 'FormController'
    })
        .otherwise({redirectTo:"/"});

}]);