/**
 * Created by John on 2015-10-05.
 */

/**
 * 1:创建一个angularJS的应用app
 * 2：给这个angularJS的应用创建一个hello指令
 * 3：设定这个是一个元素指令，模板是中的内容是Hi there
 * */

var appModule=angular.module('app',[]);

appModule.run(function($templateCache){
    $templateCache.put('helloTemplateCached.html','<div>hi there</div>');
});

appModule.directive('hello',function(){

    return {
        restrict:'E',
        templateUrl:"helloTemplateCached.html",
        replace:true

    }
})
