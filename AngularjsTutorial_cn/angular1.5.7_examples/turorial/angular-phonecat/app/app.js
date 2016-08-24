var phonecatApp=angular.module('phonecatApp',[]);

phonecatApp.controller('PhoneListController',function PhoneListController($scope){
    $scope.phones=[{
        name:'a',
        snippet:'aaa'
    },{
        name:'b',
        snippet:'bbb'
    },{
        name:'c',
        snippet:'ccc'
    }];

});


