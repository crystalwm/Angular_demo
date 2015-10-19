

/*
function controllerUser($scope,$http){
    $http({method: 'GET', url: '/goodslist.json'}).
        success(function(data, status, headers, config) {
            // this callback will be called asynchronously
            // when the response is available
            $scope.goods=data;
        }).
        error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });

}*/


var myModule=angular.module('MyModule',[]);
myModule.controller('LoadDataCtrl',['$scope','$http',function($scope,$http){
    $http({
        method:'GET',
        url:'goodslist.json'
    }).success(function(data, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
        console.log('success..');
        console.log(data);
        $scope.goods=data;
    }).error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        console.log('error...');
        });
}])