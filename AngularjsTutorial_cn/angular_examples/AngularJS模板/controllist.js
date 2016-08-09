/**
 * Created by John on 2015-09-18.
 */

function controllist_phones($scope){
    $scope.phones = [
        {"name": "Nexus S",
            "snippet": "Fast just got faster with Nexus S."},
        {"name": "Motorola XOOM? with Wi-Fi",
            "snippet": "The Next, Next Generation tablet."},
        {"name": "MOTOROLA XOOM?",
            "snippet": "The Next, Next Generation tablet."}
    ];
    $scope.hello = "Hello, World!"

    return $scope;
}


module.exports=controllist_phones;
