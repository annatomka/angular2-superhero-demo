var util = require('gulp-util');
var express = require('express');
var openResource = require('open');
var serveStatic = require('serve-static');
var codeChangeTool = require('./code_change_tools');
var path_1 = require('path');
var config_1 = require('../config');
function serveSPA() {
    var server = express();
    codeChangeTool.listen();
    server.use.apply(server, codeChangeTool.middleware);
    server.listen(config_1.PORT, function () {
        util.log('Server is listening on port: ' + config_1.PORT);
        openResource('http://localhost:' + config_1.PORT + config_1.APP_BASE + config_1.APP_DEST);
    });
}
exports.serveSPA = serveSPA;
function notifyLiveReload(e) {
    var fileName = e.path;
    codeChangeTool.changed(fileName);
}
exports.notifyLiveReload = notifyLiveReload;
function serveDocs() {
    var server = express();
    server.use(config_1.APP_BASE, serveStatic(path_1.resolve(process.cwd(), config_1.DOCS_DEST)));
    server.listen(config_1.DOCS_PORT, function () {
        return openResource('http://localhost:' + config_1.DOCS_PORT + config_1.APP_BASE);
    });
}
exports.serveDocs = serveDocs;
//# sourceMappingURL=server.js.map