var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var navigation_1 = require('./navigation');
var form_1 = require('./form');
var statistics_1 = require('./statistics');
var footer_1 = require('./footer');
var latest_1 = require('./latest');
var about_1 = require('./about');
var MyAppComponent = (function () {
    function MyAppComponent() {
    }
    MyAppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            templateUrl: "template/app.html",
            directives: [navigation_1.Navigation, form_1.SuperForm, statistics_1.Statistics, footer_1.FooterContent, router_1.ROUTER_DIRECTIVES, router_1.RouterLink, router_1.RouterOutlet]
        }),
        router_1.RouteConfig([
            { path: '/', component: form_1.SuperForm, name: 'Home' },
            { path: '/statistics', component: statistics_1.Statistics, name: 'Statistics' },
            { path: '/latest', component: latest_1.LatestComponent, name: 'Latest' },
            { path: '/about', component: about_1.AboutComponent, name: 'About' }
        ]), 
        __metadata('design:paramtypes', [])
    ], MyAppComponent);
    return MyAppComponent;
})();
angular2_1.bootstrap(MyAppComponent, [
    router_1.ROUTER_PROVIDERS,
    angular2_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
]);
//# sourceMappingURL=app.js.map