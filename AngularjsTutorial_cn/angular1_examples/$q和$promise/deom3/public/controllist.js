var httpREST=angular.module('Async',[]);
//defer.resolve()  defer.reject()  defer.notify()
httpREST.controller('promise',function($q,$http,$scope){
    /**
     * 1:创建一个defer对象
     * 2：创建一个promise对象
     * 3：在promise中定义回调函数，成功的时候执行什么回调函数，失败的时候执行什么回调函数，度回函数
     * 4：定义一个$http的get请求。这个请求在成功的时候调用defer.reolve(res.data),在失败的时候调用defer.reject(res.data)
     * */

    var defer=$q.defer();
    var promise=defer.promise;
    promise.then(function(data){
        $scope.name='成功'+data;
        //这里的返回值传递给下一个then方法的形参
     //   return 'hellow 2';
    }).then(function(data){
        $scope.name2='成功2'+data;
    },function(data){
        //任何一个步骤中发生错误，都可以在这里处理
        $scope.name2="错误2"+data;
    });

    $http({
        method:'GET',
        url:'/name'
    }).then(function(res){
        defer.resolve(res.data);
    },function(res){

        defer.reject(res.data);
    });

});
