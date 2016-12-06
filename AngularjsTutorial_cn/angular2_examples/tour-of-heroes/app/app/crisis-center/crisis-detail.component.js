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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var crisis_service_1 = require('./crisis.service');
var dialog_service_1 = require('../dialog.service');
var CrisisDetailComponent = (function () {
    function CrisisDetailComponent(route, location, crisisService, dialogService) {
        this.route = route;
        this.location = location;
        this.crisisService = crisisService;
        this.dialogService = dialogService;
    }
    CrisisDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.id = id;
            _this.crisisService.getCrisis(id).then(function (crisis) {
                _this.crisis = crisis;
                _this.editName = crisis.name;
            });
        });
    };
    CrisisDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    CrisisDetailComponent = __decorate([
        core_1.Component({
            template: "\n      <div *ngIf=\"crisis\">\n         <h2>{{crisis.name}}</h2>\n         <div><label>id:</label>{{crisis.id}}</div>\n         <div>\n            <label>name:</label>\n            <input [(ngModel)]=\"editName\" placeholder=\"name\"/>\n         </div>\n         <button (click)=\"goBack()\">Back</button>\n      </div>\n      <div>{{id}}</div>\n    "
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, common_1.Location, crisis_service_1.CrisisService, dialog_service_1.DialogService])
    ], CrisisDetailComponent);
    return CrisisDetailComponent;
}());
exports.CrisisDetailComponent = CrisisDetailComponent;
//# sourceMappingURL=crisis-detail.component.js.map