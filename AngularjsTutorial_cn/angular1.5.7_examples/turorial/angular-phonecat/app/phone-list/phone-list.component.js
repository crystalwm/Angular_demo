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
    template: "\n    <ul>\n       <li ng-repeat=\"phone in $ctrl.phones\">\n       <span>name:{{phone.name}}</span>\n       <span>snippet:{{phone.snippet}}</span>\n       </li>\n    </ul>\n    ",
    controller: phoneListController
});
//# sourceMappingURL=phone-list.component.js.map