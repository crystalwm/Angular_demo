/***
 * 1:创建一个http服务的请求类
 * 2：创建一个goodsResource 的factory，用于从服务器端获取资源。
 * 3：创建一个goodCtrl的控制器，用于从控制器中打印结果
 *
 *
 * */

var HttpREST = angular.module('HttpREST',[]);


HttpREST.factory('goodsResource',function($q,$http){
    return {
        query:function(){
            var defer = $q.defer();
            $http({method: 'GET', url: '/getGoodslist'}).
                success(function(data, status, headers, config) {
                    defer.resolve(data);
                }).
                error(function(data, status, headers, config) {
                    defer.reject(data);
                });
            return defer.promise
        }
    }
});

HttpREST.controller('goodCtrl',function($scope,goodsResource){
    //通过id获取银行卡
    $scope.goods = goodsResource.query();
    //异步打印结果
     $scope.goods.then(function(data){
         console.log(data);
         data.forEach(function(value){
             console.log(value.name);
         });

     });

});


