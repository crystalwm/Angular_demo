
var appModule=angular.module('app',[]);
appModule.controller('DataCtrl1',function($scope){
    $scope.greetingA=function(name){
        alert('hello'+name);
    };

});
appModule.directive('hello',function(){
    return {
        restrict:'E',
        templateUrl:"helloTemplate.html",
        replace:true,
        scope:{
            greet:'&'
        },
        link:function postLink(scope,iElement,iAttr){

        }
    }
})
/*
appModule.directive('hello',function(){
    return {
        restrict:'E',
        templateUrl:"helloTemplate.html",
        replace:true,
        scope:{
            flavor:'@'
        },
        link:function postLink(scope,iElement,iAttr){

        }
    }
})
*/
