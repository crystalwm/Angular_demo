function phoneListController() {
    this.phones = [{
            name: 'a',
            snippet: 'aaa'
        }, {
            name: 'b',
            snippet: 'bbb'
        }, {
            name: 'c',
            snippet: 'ccc'
        }];
}
angular.module('phonelist').component('phoneList', {
    template: "\n    Search:<input type=\"text\"/ ng-model=\"$ctrl.query\">\n    <ul>\n       <li ng-repeat=\"phone in $ctrl.phones | filter:$ctrl.query\">\n       <span>name:{{phone.name}}</span>\n       <span>snippet:{{phone.snippet}}</span>\n       </li>\n    </ul>\n    ",
    controller: phoneListController
});
//# sourceMappingURL=phone-list.component.js.map