/**
 * Created by John on 2015-10-05.
 */

/**
 * 1:����һ��angularJS��Ӧ��app
 * 2�������angularJS��Ӧ�ô���һ��helloָ��
 * 3���趨�����һ��Ԫ��ָ�ģ�����е�������Hi there
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
