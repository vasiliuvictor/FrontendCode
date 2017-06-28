angular.module('hrApp').controller('ImageController', ['$scope',
    function($scope) {
        $scope.imageList =[{
            name: "Huawei P8",
            url: "../images/phone1.jpg",
            price:"300"
        },{
            name: "Nokia",
            url: "../images/phone2.jpg",
            price:"30"
        },{
            name: "Alcatel viper",
            url: "../images/hammer.jpg",
            price:"500"
        },{
            name: "Special ToolKit",
            url: "../images/specialkit.jpg",
            price:"1000"
        }];
    }]);
