/**
 * Created by John on 2015-09-27.
 */
//�Զ���ָ��
var appModule=angular.module('app',[]);
appModule.directive('ngbkFocus',function(){
    return {
        /*
        * ���ﲻ�Ǻܶ���link�������ȡ��㺯�������á�
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