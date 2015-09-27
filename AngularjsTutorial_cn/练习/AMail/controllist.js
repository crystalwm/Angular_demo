var aMailServices=angular.module('AMail',[]);

//在URL、模块和控制器之间建立映射关系
function emailRouteConfig($routeProvider){
    $routeProvider.when('/',{
        controller:ListController,
        templateUrl:'list.html'
    }).when('/view/:id',{
        controller:DetailController,
        templateUrl:'detail.html'
    }).otherwise({
        redirectTo:'/'
    });
}
//配置我们的路由，以便AMail

function ListController(){}
function DetailController(){}
