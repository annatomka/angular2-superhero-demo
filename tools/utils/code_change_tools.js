var express = require('express');
var connectLivereload = require('connect-livereload');
var config_1 = require('../config');
var ng2HotLoader = require('angular2-hot-loader');
var tinylrFn = require('tiny-lr');
var path_1 = require('path');
var tinylr = tinylrFn();
var listen = function () {
    if (config_1.ENABLE_HOT_LOADING) {
        return ng2HotLoader.listen({
            port: config_1.HOT_LOADER_PORT,
            processPath: function (file) {
                return file.replace(path_1.join(config_1.PROJECT_ROOT, config_1.APP_SRC), path_1.join('dist', 'dev'));
            }
        });
    }
    else {
        return tinylr.listen(config_1.LIVE_RELOAD_PORT);
    }
};
exports.listen = listen;
var changed = function (files) {
    if (!(files instanceof Array)) {
        files = [files];
    }
    if (config_1.ENABLE_HOT_LOADING) {
        ng2HotLoader.onChange(files);
    }
    else {
        tinylr.changed({
            body: { files: files }
        });
    }
};
exports.changed = changed;
var tinylrMiddleware = connectLivereload({ port: config_1.LIVE_RELOAD_PORT });
var middleware = [
    config_1.APP_BASE,
    function (req, res, next) {
        if (config_1.ENABLE_HOT_LOADING) {
            next();
        }
        else {
            tinylrMiddleware(req, res, next);
        }
    },
    express.static(process.cwd())
];
exports.middleware = middleware;
//# sourceMappingURL=code_change_tools.js.map