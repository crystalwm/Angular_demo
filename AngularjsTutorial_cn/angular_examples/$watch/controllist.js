/**
 * Created by John on 2015-09-18.
 */

function controllist_items($scope){
    $scope.items=[{
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

    $scope.totalPrice=function(){
        var totalpRrice=0;
        $scope.items.forEach(function(value){
            totalpRrice+=value.quantity*value.price;
        });
        return totalpRrice;
    }

    $scope.discountPrice=function(){

        return $scope.totalPrice()>100?10:0;
    }

    $scope.finalPrice=function(){
        return $scope.totalPrice()-$scope.discountPrice();
    }

    return $scope;
}



