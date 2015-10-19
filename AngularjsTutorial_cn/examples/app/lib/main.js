/**
 * Created by R9K0H46 on 2015/9/22.
 */

function StartUpController($scope){
    $scope.f={input:0};
    $scope.ch=function(){
        $scope.f.output= $scope.f.input*10;
    }
    $scope.students=[{name:'tom',sex:'ÄÐ'},
                       {name:'xx',sex:'Å®'}];
}


function toggleController($scope){
    $scope.meauState=true;
    $scope.ch=function(){
        $scope.meauState=!$scope.meauState;
    }
}

function RTC($scope){
    $scope.directory=[{name:'dddd',cuisine:'bbq'},
        {name:'cccc',cuisine:'iiii'},
        {name:'ss',cuisine:'qqq'}];
    $scope.sR=function(row){
        $scope.selectedRow=row;
    }
}

function imgController($scope){
    $scope.imgName='lubo.jpg';

}