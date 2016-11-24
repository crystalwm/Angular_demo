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
var crisis_service_1 = require('./crisis.service');
var router_1 = require('@angular/router');
var CrisisListComponent = (function () {
    function CrisisListComponent(crisisService, router, route) {
        this.crisisService = crisisService;
        this.router = router;
        this.route = route;
        this.crisises = [];
    }
    CrisisListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.crisisService.getCrisises().then(function (crisises) { return _this.crisises = crisises; });
    };
    CrisisListComponent.prototype.onSelect = function (crisis) {
        this.selectedCrisis = crisis;
        //navigate to the selected crisis
        //   this.router.navigate([crisis.id],{relativeTo:this.route});
        this.router.navigate(['/crisis-center', this.selectedCrisis.id]);
    };
    CrisisListComponent = __decorate([
        core_1.Component({
            template: "\n       <ul  *ngIf=\"crisises.length>0\">   \n          <li *ngFor=\"let crisis of crisises\" (click)=\"onSelect(crisis)\">\n            <span>{{crisis.id}}</span>{{crisis.name}}\n          </li>\n       </ul>        \n        <router-outlet></router-outlet>\n    ",
            styles: ["\n        li {\n            cursor: pointer;\n            position: relative;\n            left: 0;\n            background-color: #EEE;\n            margin: .5em;\n            padding: .3em 0;\n            height: 1.6em;\n            border-radius: 4px;\n            list-style-type: none;\n            width: 15em;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [crisis_service_1.CrisisService, router_1.Router, router_1.ActivatedRoute])
    ], CrisisListComponent);
    return CrisisListComponent;
}());
exports.CrisisListComponent = CrisisListComponent;
//# sourceMappingURL=crisis-list.component.js.map