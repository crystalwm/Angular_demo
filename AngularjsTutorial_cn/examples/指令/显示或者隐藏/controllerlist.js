/**
 * 1:写出一个模块appModule
 * 2；为这个app定义指令。
 * 指令中中有两个div，第一个div的类为title，为第一个div绑定一个ng-click指令，
 * 第2个div的类为body，为第二个div绑定一个ng-shwo指令。
 * */

var appModule=angular.module('app',[]);
appModule.controller('expanderCtrl',function($scope){
   $scope.title="Click Me";
    $scope.text="hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh";
});
appModule.directive('expander',function(){
    return{
        restrict:'E',
        templateUrl:'helloTemplate.html',
        scope:{
            title:'=',
            text:'='
        },
        link:function postLink(scope,iElement,iAttr){
            scope.showMe=false;
            scope.toggle=function(){
                scope.showMe=!scope.showMe;
            }
        }
    }
})