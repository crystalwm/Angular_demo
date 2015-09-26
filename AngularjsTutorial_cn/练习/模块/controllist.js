var shoppingModule=angular.module('ShoppingModule',[]);

shoppingModule.factory('Items',function(){
    var items={};
    items.query=function(){
        //在真实的应用中，这里是从服务器中拉数据下来的
        return [{
            name:'商品1',
            quantity:1,
            price:20
        },{
            name:'商品2',
            quantity:1,
            price:10
        },{
            name:'商品3',
            quantity:1,
            price:5

        }
        ];
    }
    return items;
});


//当Angular 创建ShoppingController 时，它会把$scope对象和刚定义好的Items服务作为参数传递过去
function ShoppingController($scope,Items){

    $scope.items=Items.query();

}