/**
1:写出accordian指令，在控制器中需要一个gotOpened方法，它的作用是，需要遍历集合中的所有指令，
 让不是selectedExpander的showMe属性为false。
2：由于数据在控制器中是以对象数组的形式存放的，因此现在对于数据的访问方式也有修改，因此在使用expanter指令的时候也需要修改。
3：对于expander指令，在创建的时候，需要加入 accordian的expaners集合中，

 * */

var appModule=angular.module('app',[]);
appModule.controller('expanderCtrl',function($scope){

    $scope.expanders=[{
        title:"Click Me1",
        text:'1111111111'
    },{
        title:"Click Me2",
        text:'222222'
    },{
        title:'Click Me3',
        text:'33333333'
    }];
});
appModule.directive('accordian',function(){
    return{
        restrict:'E',
        transclude:true,
        replace:true,
        template:'<div ng-transclude></div>',
        controller:function(){
            //expanders中实际上存放的是每一个expander的作用域
            var expanders=[];
            this.gotOpened=function(selectedExpander){
                expanders.forEach(function(expander){
                    if(expander!=selectedExpander){
                        expander.showMe=false;
                    }
                })
            }
            this.addExpander=function(expander){
                expanders.push(expander);
            }
        }
    }
})

appModule.directive('expander',function(){
    return{
        restrict:'E',
        templateUrl:'helloTemplate.html',
        scope:{
            title:'=',
            text:'='
        },
        require:'^accordian',
        link:function postLink(scope,iElement,iAttr,accordianController){
            scope.showMe=false;
            accordianController.addExpander(scope);
            scope.toggle=function(){
                scope.showMe=!scope.showMe;
                accordianController.gotOpened(scope);
            }
        }
    }
})