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

angular.module('phonecatApp').component('phoneList',{
    template:`
    <ul>
       <li ng-repeat="phone in $ctrl.phones">
       <span>name:{{phone.name}}</span>
       <span>snippet:{{phone.snippet}}</span>
       </li>
    </ul>
    `,
    controller:phoneListController
});
