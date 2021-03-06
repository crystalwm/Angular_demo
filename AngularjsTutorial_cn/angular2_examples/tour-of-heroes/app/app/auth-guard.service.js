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
var auth_service_1 = require("./auth.service");
var router_1 = require("@angular/router");
var AuthGuardService = (function () {
    function AuthGuardService(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuardService.prototype.checkLogin = function (url) {
        if (this.authService.isLoggedIn) {
            return true;
        }
        this.authService.redirectUrl = url;
        var navigationExtras = {
            queryParams: { sessionId: 'ddd' },
            fragment: 'anchor'
        };
        this.router.navigate(['/login'], navigationExtras);
        return false;
    };
    AuthGuardService.prototype.canActivate = function (futureRoute, futureRouteState) {
        var url = futureRouteState.url;
        return this.checkLogin(url);
    };
    AuthGuardService.prototype.canLoad = function (route) {
        console.log("enter canLoad");
        var url = "/" + route.path;
        return this.checkLogin(url);
    };
    AuthGuardService.prototype.canActivateChild = function (futureRoute, futureRouteState) {
        return this.canActivate(futureRoute, futureRouteState);
    };
    AuthGuardService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService])
    ], AuthGuardService);
    return AuthGuardService;
}());
exports.AuthGuardService = AuthGuardService;
//# sourceMappingURL=auth-guard.service.js.map