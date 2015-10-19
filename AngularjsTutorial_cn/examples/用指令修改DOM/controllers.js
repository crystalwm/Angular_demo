/**
 * Created by John on 2015-09-27.
 */
//自定义指令
var appModule=angular.module('app',[]);
appModule.directive('ngbkFocus',function(){
    return {
        /*
        * 这里不是很懂，link函数会获取外层函数的引用。
        * */
        link:function(scope,element,attrs,controller){
            element[0].style.background="red";
        }
    };
});


function SomeController($scope){
    $scope.message={
        text:'nothing clicked yet'
    };
    $scope.clickUnfocused=function(){
        $scope.message.text="unfocused button clicked";
    }
    $scope.clickFocused=function(){
        $scope.message.text="focus button clicked";
    }
}