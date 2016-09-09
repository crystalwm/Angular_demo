/**
 * Created by John on 2015-09-27.
 */

function AddUserController($scope){
    $scope.message="";
    $scope.addUser=function(){
        $scope.message='thanks'+$scope.user.first+',we added you!';
    }
}