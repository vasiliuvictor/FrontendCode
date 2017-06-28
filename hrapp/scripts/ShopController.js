/**
 * Created by Claudiu.Marinescu on 6/28/2017.
 */
angular.module('hrApp').controller('ShopController', ['$scope',
    function($scope) {
    $scope.totald = 0;
    $scope.cart = [];
    $scope.cartShow = false;

    $scope.changeView = function() {
        $scope.cartShow = !$scope.cartShow;
    }

    $scope.cumpara = function(name, url, price){
        $scope.totald += parseInt(price);
        $scope.cart.push({nume: name, url: url, price: price});
    }
}]);

