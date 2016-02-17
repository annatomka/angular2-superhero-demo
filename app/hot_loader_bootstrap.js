var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var app_1 = require('./components/app2/app');
System.import('//localhost:<%= HOT_LOADER_PORT %>/ng2-hot-loader')
    .then(function (loader) {
    loader.ng2HotLoaderBootstrap(app_1.AppCmp, [
        router_1.ROUTER_PROVIDERS,
        core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
    ]);
});
//# sourceMappingURL=hot_loader_bootstrap.js.map