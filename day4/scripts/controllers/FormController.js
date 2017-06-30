finalapp.controller('FormController', ['$scope', function($scope){

$scope.trimite = function(){
    if($scope.myForm.$valid==true){

        alert("trimis!");
    }

}


}]);
