var core_1 = require('angular2/core');
var browser_1 = require('angular2/platform/browser');
var router_1 = require('angular2/router');
var app_1 = require('./components/app2/app');
browser_1.bootstrap(app_1.AppCmp, [
    router_1.ROUTER_PROVIDERS,
    core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
]);
//# sourceMappingURL=bootstrap.js.map