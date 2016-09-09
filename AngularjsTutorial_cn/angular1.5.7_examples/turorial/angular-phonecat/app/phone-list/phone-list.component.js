/*
function phoneListController($http){

/!* this.phones=[{
        name:'a',
        snippet:'aaa'
    },{
        name:'b',
        snippet:'bbb'
    },{
        name:'c',
        snippet:'ccc'
    }];*!/
    var self=this;
    $http.get('./phones/phones.json').then(function(response){
        self.phones=response.data;
    });
}*/
function phoneListController(httpPhone) {
    console.log('phoneListController');
    //get all the data
    var self = this;
    httpPhone.query().then(function (data) {
        self.phones = data;
    });
}
angular.module('phonelist').component('phoneList', {
    template: "\n    Search:<input type=\"text\"/ ng-model=\"$ctrl.query\">\n    <ul>\n       <li ng-repeat=\"phone in $ctrl.phones | filter:$ctrl.query\">\n       <span>name:{{phone.name}}</span>\n       <span>snippet:{{phone.snippet}}</span>\n       <div> <img src=\"{{phone.imageUrl}}\" /></div>\n       </li>\n    </ul>\n    ",
    controller: phoneListController
});
//# sourceMappingURL=phone-list.component.js.map