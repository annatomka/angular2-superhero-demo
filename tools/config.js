var fs_1 = require('fs');
var yargs_1 = require('yargs');
var path_1 = require('path');
// --------------
// Configuration.
var ENVIRONMENTS = {
    DEVELOPMENT: 'dev',
    PRODUCTION: 'prod'
};
exports.PROJECT_ROOT = path_1.normalize(path_1.join(__dirname, '..'));
exports.ENV = getEnvironment();
exports.DEBUG = yargs_1.argv['debug'] || false;
exports.PORT = yargs_1.argv['port'] || 5555;
exports.LIVE_RELOAD_PORT = yargs_1.argv['reload-port'] || 4002;
exports.DOCS_PORT = yargs_1.argv['docs-port'] || 4003;
exports.APP_BASE = yargs_1.argv['base'] || '/';
exports.ENABLE_HOT_LOADING = !!yargs_1.argv['hot-loader'];
exports.HOT_LOADER_PORT = 5578;
exports.BOOTSTRAP_MODULE = exports.ENABLE_HOT_LOADING ? 'hot_loader_bootstrap' : 'bootstrap';
exports.APP_TITLE = 'My Angular2 App';
exports.APP_SRC = 'app';
exports.ASSETS_SRC = exports.APP_SRC + "/assets";
exports.TOOLS_DIR = 'tools';
exports.TMP_DIR = 'tmp';
exports.TEST_DEST = 'test';
exports.DOCS_DEST = 'docs';
exports.APP_DEST = "dist/" + exports.ENV;
exports.ASSETS_DEST = exports.APP_DEST + "/assets";
exports.CSS_DEST = exports.APP_DEST + "/css";
exports.JS_DEST = exports.APP_DEST + "/js";
exports.APP_ROOT = exports.ENV === 'dev' ? "" + exports.APP_BASE + exports.APP_DEST + "/" : "" + exports.APP_BASE;
exports.VERSION = appVersion();
exports.CSS_PROD_BUNDLE = 'all.css';
exports.JS_PROD_SHIMS_BUNDLE = 'shims.js';
exports.JS_PROD_APP_BUNDLE = 'app.js';
exports.VERSION_NPM = '2.14.2';
exports.VERSION_NODE = '4.0.0';
// Declare NPM dependencies (Note that globs should not be injected).
exports.DEV_NPM_DEPENDENCIES = normalizeDependencies([
    { src: 'systemjs/dist/system-polyfills.src.js', inject: 'shims', dest: exports.JS_DEST },
    { src: 'reflect-metadata/Reflect.js', inject: 'shims', dest: exports.JS_DEST },
    { src: 'es6-shim/es6-shim.js', inject: 'shims', dest: exports.JS_DEST },
    { src: 'systemjs/dist/system.src.js', inject: 'shims', dest: exports.JS_DEST },
    { src: 'angular2/bundles/angular2-polyfills.js', inject: 'shims', dest: exports.JS_DEST },
    { src: 'rxjs/bundles/Rx.js', inject: 'libs', dest: exports.JS_DEST },
    { src: 'angular2/bundles/angular2.js', inject: 'libs', dest: exports.JS_DEST },
    { src: 'angular2/bundles/router.js', inject: 'libs', dest: exports.JS_DEST },
    { src: 'angular2/bundles/http.js', inject: 'libs', dest: exports.JS_DEST },
    { src: 'materialize-css/dist/css/materialize.css', inject: true, dest: exports.CSS_DEST },
    { src: 'materialize-css/dist/js/materialize.js', inject: true, dest: exports.JS_DEST }
]);
exports.PROD_NPM_DEPENDENCIES = normalizeDependencies([
    { src: 'reflect-metadata/Reflect.js', inject: 'shims' },
    { src: 'es6-shim/es6-shim.min.js', inject: 'shims' },
    { src: 'angular2/bundles/angular2-polyfills.min.js', inject: 'libs' },
    { src: 'materialize-css/dist/css/materialize.min.css', inject: true },
    { src: 'materialize-css/dist/js/materialize.min.js', inject: 'libs' }
]);
// Declare local files that needs to be injected
exports.APP_ASSETS = [
    { src: exports.ASSETS_SRC + "/main.css", inject: true, dest: exports.CSS_DEST }
];
exports.DEV_DEPENDENCIES = exports.DEV_NPM_DEPENDENCIES.concat(exports.APP_ASSETS);
exports.PROD_DEPENDENCIES = exports.PROD_NPM_DEPENDENCIES.concat(exports.APP_ASSETS);
// ----------------
// SystemsJS Configuration.
var SYSTEM_CONFIG_DEV = {
    defaultJSExtensions: true,
    paths: {
        'bootstrap': exports.APP_ROOT + "bootstrap",
        'hot_loader_bootstrap': exports.APP_ROOT + "hot_loader_bootstrap",
        '*': exports.APP_BASE + "node_modules/*"
    }
};
exports.SYSTEM_CONFIG = SYSTEM_CONFIG_DEV;
// --------------
// Private.
function normalizeDependencies(deps) {
    deps
        .filter(function (d) { return !/\*/.test(d.src); }) // Skip globs
        .forEach(function (d) { return d.src = require.resolve(d.src); });
    return deps;
}
function appVersion() {
    var pkg = JSON.parse(fs_1.readFileSync('package.json').toString());
    return pkg.version;
}
function getEnvironment() {
    var base = yargs_1.argv['_'];
    var prodKeyword = !!base.filter(function (o) { return o.indexOf(ENVIRONMENTS.PRODUCTION) >= 0; }).pop();
    if (base && prodKeyword || yargs_1.argv['env'] === ENVIRONMENTS.PRODUCTION) {
        return ENVIRONMENTS.PRODUCTION;
    }
    else {
        return ENVIRONMENTS.DEVELOPMENT;
    }
}
