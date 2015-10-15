/**
 * Created by John on 2015-10-14.
 */

var  myModule=angular.module('app',['ui.router']);
myModule.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.when("","loginForm");
    $stateProvider.state('login',{
        url:'/loginForm',
        templateUrl:'loginForm.html',
        controller:'loginCtrl'
    }).state('booklist',{
        url:'/bookList',
        templateUrl:'bookList.html'
    }).state('bookdetail',{
        url:'/bookDetail',
        templateUrl:'bookDetail.html'
    }).state('addbook',{
        url:'/addBookForm',
        templateUrl:'addBookForm.html'
    });
});

myModule.controller('loginCtrl',function($scope){
    /**
     *����Ҫʵʱ�Ļ�ȡ�û���������
     * 1�������û���������򣬵��û�ʧȥ�����ʱ����Ҫ����û�������ַ��ǲ�������Ҫ��ģ����������Ҫ��
     * �������ʾ��Ϣ
     * 2.������������򣬵��û�ʧȥ�����ʱ����Ҫ����û��������ǲ�������Ҫ��ģ����������Ҫ��
     * ����Ҫ������ʾ�����û����µ����롣
     * */
    $scope.uu=function(){
        console.log($scope.userName);
    }

});


