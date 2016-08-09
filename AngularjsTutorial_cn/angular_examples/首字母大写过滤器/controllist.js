

//当Angular 创建ShoppingController 时，它会把$scope对象和刚定义好的Items服务作为参数传递过去
var homeModule=angular.module('HomeModule',[]);

homeModule.filter('titleCase',function(){
    var InitialUpperCase=function(input){
        var words=input.split(' ');
        for(var i=0;i<words.length;i++){
            words[i]=words[i][0].toUpperCase()+words[i].slice(1);
        }
        words=words.join(' ');
        return words ;

    }
    return InitialUpperCase;
})

function HomeController($scope){
    $scope.pageHeading='wo se ya';

}