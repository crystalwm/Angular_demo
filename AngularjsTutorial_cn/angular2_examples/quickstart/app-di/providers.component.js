"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable:one-line:check-open-brace*/
// Examples of provider arrays
var core_1 = require('@angular/core');
var app_config_1 = require('./app.config');
var hero_service_1 = require('./heroes/hero.service');
var hero_service_provider_1 = require('./heroes/hero.service.provider');
var logger_service_1 = require('./logger.service');
var logger2_service_1 = require('./logger2.service');
var user_service_1 = require('./user.service');
var d = new logger2_service_1.Logger2();
d.log('ddd');
var template = '{{log}}';
//////////////////////////////////////////
var Provider1Component = (function () {
    function Provider1Component(logger) {
        logger.log('Hello from logger provided with Logger class');
        this.log = logger.logs[0];
    }
    Provider1Component = __decorate([
        core_1.Component({
            selector: 'provider-1',
            template: template,
            providers: [logger_service_1.Logger]
        }), 
        __metadata('design:paramtypes', [logger_service_1.Logger])
    ], Provider1Component);
    return Provider1Component;
}());
exports.Provider1Component = Provider1Component;
//////////////////////////////////////////
var Provider3Component = (function () {
    function Provider3Component(logger) {
        logger.log('Hello from logger provided with useClass:Logger');
        this.log = logger.logs[0];
    }
    Provider3Component = __decorate([
        core_1.Component({
            selector: 'provider-3',
            template: template,
            providers: [{ provide: logger_service_1.Logger, useClass: logger_service_1.Logger }]
        }), 
        __metadata('design:paramtypes', [logger_service_1.Logger])
    ], Provider3Component);
    return Provider3Component;
}());
exports.Provider3Component = Provider3Component;
//////////////////////////////////////////
var BetterLogger = (function (_super) {
    __extends(BetterLogger, _super);
    function BetterLogger() {
        _super.apply(this, arguments);
    }
    return BetterLogger;
}(logger_service_1.Logger));
var Provider4Component = (function () {
    function Provider4Component(logger) {
        logger.log('Hello from logger provided with useClass:BetterLogger');
        this.log = logger.logs[0];
    }
    Provider4Component = __decorate([
        core_1.Component({
            selector: 'provider-4',
            template: template,
            providers: [{ provide: logger_service_1.Logger, useClass: BetterLogger }]
        }), 
        __metadata('design:paramtypes', [logger_service_1.Logger])
    ], Provider4Component);
    return Provider4Component;
}());
exports.Provider4Component = Provider4Component;
//////////////////////////////////////////
var EvenBetterLogger = (function (_super) {
    __extends(EvenBetterLogger, _super);
    function EvenBetterLogger(userService) {
        _super.call(this);
        this.userService = userService;
    }
    EvenBetterLogger.prototype.log = function (message) {
        var name = this.userService.user.name;
        _super.prototype.log.call(this, "Message to " + name + ": " + message);
    };
    EvenBetterLogger = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], EvenBetterLogger);
    return EvenBetterLogger;
}(logger_service_1.Logger));
var Provider5Component = (function () {
    function Provider5Component(logger) {
        logger.log('Hello from EvenBetterlogger');
        this.log = logger.logs[0];
    }
    Provider5Component = __decorate([
        core_1.Component({
            selector: 'provider-5',
            template: template,
            providers: [user_service_1.UserService,
                { provide: logger_service_1.Logger, useClass: EvenBetterLogger }]
        }), 
        __metadata('design:paramtypes', [logger_service_1.Logger])
    ], Provider5Component);
    return Provider5Component;
}());
exports.Provider5Component = Provider5Component;
//////////////////////////////////////////
var NewLogger = (function (_super) {
    __extends(NewLogger, _super);
    function NewLogger() {
        _super.apply(this, arguments);
    }
    return NewLogger;
}(logger_service_1.Logger));
var OldLogger = (function () {
    function OldLogger() {
        this.logs = [];
    }
    OldLogger.prototype.log = function (message) {
        throw new Error('Should not call the old logger!');
    };
    ;
    return OldLogger;
}());
var Provider6aComponent = (function () {
    function Provider6aComponent(newLogger, oldLogger) {
        if (newLogger === oldLogger) {
            throw new Error('expected the two loggers to be different instances');
        }
        oldLogger.log('Hello OldLogger (but we want NewLogger)');
        // The newLogger wasn't called so no logs[]
        // display the logs of the oldLogger.
        this.log = newLogger.logs[0] || oldLogger.logs[0];
    }
    Provider6aComponent = __decorate([
        core_1.Component({
            selector: 'provider-6a',
            template: template,
            providers: [NewLogger,
                // Not aliased! Creates two instances of `NewLogger`
                { provide: OldLogger, useClass: NewLogger }]
        }), 
        __metadata('design:paramtypes', [NewLogger, OldLogger])
    ], Provider6aComponent);
    return Provider6aComponent;
}());
exports.Provider6aComponent = Provider6aComponent;
var Provider6bComponent = (function () {
    function Provider6bComponent(newLogger, oldLogger) {
        if (newLogger !== oldLogger) {
            throw new Error('expected the two loggers to be the same instance');
        }
        oldLogger.log('Hello from NewLogger (via aliased OldLogger)');
        this.log = newLogger.logs[0];
    }
    Provider6bComponent = __decorate([
        core_1.Component({
            selector: 'provider-6b',
            template: template,
            providers: [NewLogger,
                // Alias OldLogger w/ reference to NewLogger
                { provide: OldLogger, useExisting: NewLogger }]
        }), 
        __metadata('design:paramtypes', [NewLogger, OldLogger])
    ], Provider6bComponent);
    return Provider6bComponent;
}());
exports.Provider6bComponent = Provider6bComponent;
//////////////////////////////////////////
// An object in the shape of the logger service
var silentLogger = {
    logs: ['Silent logger says "Shhhhh!". Provided via "useValue"'],
    log: function () { }
};
var Provider7Component = (function () {
    function Provider7Component(logger) {
        logger.log('Hello from logger provided with useValue');
        this.log = logger.logs[0];
    }
    Provider7Component = __decorate([
        core_1.Component({
            selector: 'provider-7',
            template: template,
            providers: [{ provide: logger_service_1.Logger, useValue: silentLogger }]
        }), 
        __metadata('design:paramtypes', [logger_service_1.Logger])
    ], Provider7Component);
    return Provider7Component;
}());
exports.Provider7Component = Provider7Component;
/////////////////
var Provider8Component = (function () {
    function Provider8Component(heroService) {
        // must be true else this component would have blown up at runtime
        this.log = 'Hero service injected successfully via heroServiceProvider';
    }
    Provider8Component = __decorate([
        core_1.Component({
            selector: 'provider-8',
            template: template,
            providers: [hero_service_provider_1.heroServiceProvider, logger_service_1.Logger, user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService])
    ], Provider8Component);
    return Provider8Component;
}());
exports.Provider8Component = Provider8Component;
/////////////////
var Provider9Component = (function () {
    /*
     // FAIL! Can't inject using the interface as the parameter type
     constructor(private config: AppConfig){ }
     */
    function Provider9Component(config) {
        this.config = config;
    }
    Provider9Component.prototype.ngOnInit = function () {
        this.log = 'APP_CONFIG Application title is ' + this.config.title;
    };
    Provider9Component = __decorate([
        core_1.Component({
            selector: 'provider-9',
            template: template,
            /*
             // FAIL!  Can't use interface as provider token
             [{ provide: AppConfig, useValue: HERO_DI_CONFIG })]
             */
            providers: [{ provide: app_config_1.APP_CONFIG, useValue: app_config_1.HERO_DI_CONFIG }]
        }),
        __param(0, core_1.Inject(app_config_1.APP_CONFIG)), 
        __metadata('design:paramtypes', [Object])
    ], Provider9Component);
    return Provider9Component;
}());
exports.Provider9Component = Provider9Component;
//////////////////////////////////////////
// Sample providers 1 to 7 illustrate a required logger dependency.
// Optional logger, can be null
var core_2 = require('@angular/core');
var some_message = 'Hello from the injected logger';
var Provider10Component = (function () {
    function Provider10Component(logger) {
        this.logger = logger;
        if (this.logger) {
            this.logger.log(some_message);
        }
    }
    Provider10Component.prototype.ngOnInit = function () {
        this.log = this.logger ? this.logger.logs[0] : 'Optional logger was not available';
    };
    Provider10Component = __decorate([
        core_1.Component({
            selector: 'provider-10',
            template: template
        }),
        __param(0, core_2.Optional()), 
        __metadata('design:paramtypes', [logger_service_1.Logger])
    ], Provider10Component);
    return Provider10Component;
}());
exports.Provider10Component = Provider10Component;
/////////////////
var ProvidersComponent = (function () {
    function ProvidersComponent() {
    }
    ProvidersComponent = __decorate([
        core_1.Component({
            selector: 'my-providers',
            template: "\n  <h2>Provider variations</h2>\n  <div id=\"p1\"><provider-1></provider-1></div>\n  <div id=\"p3\"><provider-3></provider-3></div>\n  <div id=\"p4\"><provider-4></provider-4></div>\n  <div id=\"p5\"><provider-5></provider-5></div>\n  <div id=\"p6a\"><provider-6a></provider-6a></div>\n  <div id=\"p6b\"><provider-6b></provider-6b></div>\n  <div id=\"p7\"><provider-7></provider-7></div>\n  <div id=\"p8\"><provider-8></provider-8></div>\n  <div id=\"p9\"><provider-9></provider-9></div>\n  <div id=\"p10\"><provider-10></provider-10></div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], ProvidersComponent);
    return ProvidersComponent;
}());
exports.ProvidersComponent = ProvidersComponent;
//# sourceMappingURL=providers.component.js.map