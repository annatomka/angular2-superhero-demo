var browser_1 = require('angular2/platform/browser');
var app_component_1 = require('./app.component');
var router_1 = require('angular2/router');
browser_1.bootstrap(app_component_1.AppComponent, [
    router_1.ROUTER_PROVIDERS,
    provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
]);
//# sourceMappingURL=boot.js.map