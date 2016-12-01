"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = "tour of heroes";
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <h1>{{title}}</h1>\n        <a routerLink=\"/crisis-center\" routerLinkActive=\"active\">Crisis Center</a>\n        <a routerLink=\"/heroes\" routerLinkActive=\"active\">Heroes</a>\n        <a routerLink='/admin' routerLinkActive=\"active\">Admin</a>\n        <a routerLink='login' routerLinkActive=\"active\">Login</a>\n        <router-outlet></router-outlet>\n    ",
            styles: [
                "\n        a {\n            text-decoration: none;\n            border: 1px solid #eee;\n            padding: 5px;\n            background-color: lavender;\n            border-radius: 5px;\n        }\n        a:hover{\n            background-color:thistle;\n        }\n        a.active {\n            background-color:thistle;\n        }\n"
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map