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

myModule.controller('loginCtrl',function($scope,$http){
    /**
     *����Ҫʵʱ�Ļ�ȡ�û���������
     * 1�������û���������򣬵��û�ʧȥ�����ʱ����Ҫ����û�������ַ��ǲ�������Ҫ��ģ����������Ҫ��
     * �������ʾ��Ϣ
     * 2.������������򣬵��û�ʧȥ�����ʱ����Ҫ����û��������ǲ�������Ҫ��ģ����������Ҫ��
     * ����Ҫ������ʾ�����û����µ����롣
     * */
    $scope.isvalidusername='N';
    $scope.isvalidpwd='N';

    $scope.confirmLogin=function(){

        console.log('ִ����confirmLogin');

/*        if($scope.isvalidusername=='Y' &&  $scope.isvalidpwd=='Y'){
            $http.post('login', {
                username: $scope.userName,
                password:$scope.password
            }).
                success(function(data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                     console.log(data);
                }).
                error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });

        }*/

    }

});


