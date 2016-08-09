/**
 * Created by John on 2015-09-27.
 */


function ShoppingController($scope,$http){
    $http.get('/products').success(function(data,status,headers,config){
        $scope.items=data;
    });
}