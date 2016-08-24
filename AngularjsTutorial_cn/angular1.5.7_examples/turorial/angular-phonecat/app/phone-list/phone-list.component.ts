function phoneListController(){
    this.phones=[{
        name:'a',
        snippet:'aaa'
    },{
        name:'b',
        snippet:'bbb'
    },{
        name:'c',
        snippet:'ccc'
    }];

}

angular.module('phonelist').component('phoneList',{
    template:`
    Search:<input type="text"/ ng-model="$ctrl.query">
    <ul>
       <li ng-repeat="phone in $ctrl.phones | filter:$ctrl.query">
       <span>name:{{phone.name}}</span>
       <span>snippet:{{phone.snippet}}</span>
       </li>
    </ul>
    `,
    controller:phoneListController
});
