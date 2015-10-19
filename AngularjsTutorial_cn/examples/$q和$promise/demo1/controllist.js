var HttpREST=angular.module('Async',[]);

//基本例子
HttpREST.controller('promise',function($q,$http){
    /**
     * 1：创建一个defer对象
     * 2：创建一个defer对象对应的promise对象
     * 3：promise对象定义了成功回调函数，定义了失败回调函数
     * 4：对于promise发起通知
     * */
        //创建defer对象
    var defer=$q.defer();
    // 创建defer对象对应的promise对象
    var promise=defer.promise;
    //定义了成功之后的执行，和失败之后的执行
    promise.then(function(data){
        console.log('成功'+data);
    },function(data){
        console.log('失败'+data);
    });
    //对于promise发起通知
    defer.resolve('code_buny');
});

