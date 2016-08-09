
var appModule=angular.module('app',[]);
appModule.directive('hello',function(){
    return {
        restrict:'E',
        templateUrl:"helloTemplate.html",
        replace:true
    }
})
