/**
 * 1:创建一个依赖于ngResource的模块HttpREST
 * 2:对于HttpREST模块创建一个服务cardResource---需要$resource
 * 3:创建一个查询Card的工厂httpCard-----需要$q ,cardResource
 * 4:在这个工厂中返回的是对象列表，其中有一个getById,它通过cardResource.get()获取。
 * 5：创建HttpREST模块的控制器card。为$scope 对象添加上id为1的银行卡信息，id为2的银行卡信息。
 * */

/*
var httpREST=angular.module('HttpREST',['ngResource']);
httpREST.factory('cardResource',['$resouce',function($resouce){
    return $resouce('/card/user/:userId/:id',{
        userId:123,
        id:'@id'
    });
}]);

httpREST.factory('httpCard',['$q','cardResource',function($q,cardResource){
    return{
        getById:function(queryId){
            //这里有问题，defer对象的创建是需要通过$q

            var defer= $q.defer();
            cardResource.get({id:queryId},function(data){
                 defer.resolve(data);
            },function(res){
                defer.reject(res);
            });
            return defer.promise;
        }
    }
}]);

httpREST.controller('cardController',function($scope,httpCard){
//异步打印
    $scope.card_1 = httpCard.getById(1);
    $scope.card_1.then(function(){console.log($scope.card_1)});
    $scope.card_2=httpCard.getById(2);
});*/

var HttpREST = angular.module('HttpREST',['ngResource']);

HttpREST.factory('cardResource',function($resource){
    return $resource('/card/user/:userID/:id',{userID:123,id:'@id'},{charge:{method:'POST',params:{charge:true},isArray:false}})
});
HttpREST.factory('httpCard',function($q,cardResource){
    return {
        getById:function(cardID){
            var defer = $q.defer();
            cardResource.get({id:cardID},function(data,headers){
                defer.resolve(data);
            },function(res){
                defer.reject(res);
            });
            return defer.promise
        },
        query:function(){
            var defer = $q.defer();
            cardResource.query({},function(data,headers){
                defer.resolve(data);
            },function(res){
                defer.reject(res);
            });
            return defer.promise
        }
    }
});

HttpREST.controller('Card',function($scope,httpCard,cardResource){
    //通过id获取银行卡
    $scope.card_1 = httpCard.getById(1);
    //异步打印结果
     $scope.card_1.then(function(data){
         console.log(data);

     });

    $scope.card_2 = httpCard.getById(2);

/*    $scope.save1=function(){
        $scope.card_1.$$v.name='gongshang bank2';
        $scope.card_1.$$v.$save();
    }*/
    $scope.save1=function(){
        $scope.card_1.then(function(data){
            data.name="gongshang bank3";
            data.$save();
        });
    }
});


