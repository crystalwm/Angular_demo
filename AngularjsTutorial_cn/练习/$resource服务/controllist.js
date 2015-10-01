var httpREST=angular.module('HttpREST',['ngResource']);

httpREST.factory('cardResource',function($resource){
    return $resource('/card/user/:userID/:id',{
        userID:123,
        /**
         * ('/card/user/:userID/:id',{userID:123,id:'@id'}),那么userID会被配置为123.
         另外,在调用$resource()的方法的时候(比如get,query...),
         可以传入参数覆盖这里对url参数的配置,这在后面说得到它的方法的时候再详解

         通过$resource获取到的资源,或者是通过$resource实例化的资源,资源本身就拥有了一些方法,
         $save,$delete,$remove,可以直接调用来保存该资源:
         */
        ID:'@id'
    },{
        charge:{
            method:'POST',
            params:{charge:true},
            isArray:false
        }
    });
});