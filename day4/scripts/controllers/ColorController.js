finalapp.controller('ColorController', ['$scope', function($scope){

    $scope.colors=[
        {
        "text" : "muted",
        "class":"text-muted",
        "type":"strong"},
        {
            "text" : "primary",
            "class":"text-primary",
            "type":"strong"},
        {
            "text" : "success",
            "class":"text-success",
            "type":"strong"},
        {
            "text" : "info",
            "class":"text-info",
            "type":"boring"},
        {
            "text" : "danger",
            "class":"text-danger",
            "type":"boring"}


    ];

    $scope.changeColor = function(){
        $scope.colorClass =$scope.myColor;

    }


}]);

