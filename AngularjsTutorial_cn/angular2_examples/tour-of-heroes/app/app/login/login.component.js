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
var auth_service_1 = require('../auth.service');
var LoginComponent = (function () {
    function LoginComponent(authService) {
        this.authService = authService;
        this.buttonState = "Login";
        this.desp = "Logged out";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.isLoggedIn = this.authService.isLoggedIn;
    };
    LoginComponent.prototype.changeState = function () {
        if (this.isLoggedIn) {
            this.authService.logout();
            this.buttonState = "Login";
            this.desp = "Logged out";
            this.isLoggedIn = this.authService.isLoggedIn;
        }
        else {
            var that = this;
            this.desp = "Trying to log in ...";
            this.authService.login().subscribe(function () {
                that.buttonState = "Logout";
                that.desp = "Logged in";
            });
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            template: "\n        <h2>LOGIN</h2>\n        <p>{{desp}}</p>\n        <button (click)=\"changeState()\">{{buttonState}}</button>\n    "
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map