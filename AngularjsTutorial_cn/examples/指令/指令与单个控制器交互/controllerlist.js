
var appModule=angular.module('app',[]);
appModule.controller('DataCtrl1',function($scope){
    $scope.loadData=function(){
        console.log("加载数据中");
    }

});
appModule.directive('hello',function(){
    return {
        restrict:'E',
        templateUrl:"helloTemplate.html",
        replace:true,
        link:function postLink(scope,iElement,iAttr){
            iElement.bind("mouseenter",function(){
                scope.loadData();
            });

        }
    }
})
