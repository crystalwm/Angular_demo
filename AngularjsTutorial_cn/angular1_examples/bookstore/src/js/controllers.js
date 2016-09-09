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
     *我需要实时的获取用户名和密码
     * 1：对于用户名的输入框，当用户失去焦点的时候，需要检查用户输入的字符是不是满足要求的，如果不满足要求，
     * 则给出提示信息
     * 2.对于密码输入框，当用户失去焦点的时候，需要检查用户的输入是不是满足要求的，如果不满足要求，
     * 则需要给出提示，让用户重新的输入。
     * */
    $scope.isvalidusername='N';
    $scope.isvalidpwd='N';

    $scope.confirmLogin=function(){

        console.log('执行了confirmLogin');

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


