
var appModule=angular.module('app',[]);
appModule.controller('DataCtrl1',function($scope){
    $scope.loadData=function(){
        console.log("加载数据中");
    }
});

appModule.controller('DataCtrl2',function($scope){
    $scope.loadData2=function(){
        console.log("加载数据中222");
    }
});
appModule.directive('hello',function(){
    return {
        restrict:'E',
        templateUrl:"helloTemplate.html",
        replace:true,
        link:function postLink(scope,iElement,iAttr){
            iElement.bind("mouseenter",function(){
                /**
                 * 1:获取标签属性 iAttr.howToLoad
                 * 2：调用相应的方法
                 * 3:特别注意--属性要小写
                 * */
                scope.$apply(iAttr.howtoload);
            });

        }
    }
})
