var httpRest=angular.module('HttpRest',['ngResource']);

httpRest.factory('phoneResource',function($resource){
    return $resource('/phone/:id.json',{id:'@id'})
});
httpRest.factory('httpPhone',function($q,phoneResource){
    return {
        getById:function(phoneID){
            var defer=$q.defer();
            phoneResource.get({id:phoneID},function(data,headers){
                defer.resolve(data);

            },function(res){
                defer.reject(res);
            })
            return defer.promise;
        },
        query:function(){
            var defer=$q.defer();
            phoneResource.query({},function(data,headers){
                defer.resolve(data);
            },function(res){
                defer.reject(res);
            })
            return defer.promise;
        }
    }
});
