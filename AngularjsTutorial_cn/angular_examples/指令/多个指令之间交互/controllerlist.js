/**
 * 1:创建4个指令 superman strength speed  light
 * 2:在superman指令的controller中暴露了3个方法 addStrength addSpeed addLight
 * 3:在superman的scope中创建独立的作用域
 * 4：在superman的link函数中比较简单，给元素绑定mouseenter事件主要是用来打印scope.abilities
 *
 * */


var appModule=angular.module('app',[]);

appModule.directive('superman',function(){
    return {
        restrict:'AE',
        templateUrl:"helloTemplate.html",
        replace:true,
        scope:{},
        controller:function($scope){
            $scope.abilities=[];
            this.addStrength=function(){
                $scope.abilities.push('strength');
            }
            this.addSpeed=function(){
                $scope.abilities.push('speed');
            }
            this.addLight=function(){
                $scope.abilities.push('light');
            }
        },
        link:function postLink(scope,iElement,iAttr){
            iElement.bind("mouseenter",function(){
                console.log(scope.abilities);
            });
        }
    }
});
appModule.directive('strength',function(){
    return {
        require:'?superman',
        link:function postLink(scope,iElement,iAttr,supermanController){
            supermanController.addStrength();
        }
    }
});
appModule.directive('speed',function(){
    return {
        require:'?superman',
        link:function postLink(scope,iElement,iAttr,supermanController){
            supermanController.addSpeed();
        }
    }
});
appModule.directive('light',function(){
    return {
        require:'?superman',
        link:function postLink(scope,iElement,iAttr,supermanController){
            supermanController.addLight();
        }
    }
});