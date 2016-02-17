var async = require('async');
var util = require('gulp-util');
var chalk = require('chalk');
var del = require('del');
var config_1 = require('../config');
function cleanAll(done) {
    async.parallel([
        cleanDist,
        cleanTest,
        cleanTmp
    ], done);
}
function cleanDist(done) {
    del(config_1.APP_DEST).then(function (paths) {
        util.log('Deleted', chalk.yellow(paths && paths.join(', ') || '-'));
        done();
    });
}
function cleanTest(done) {
    del(config_1.TEST_DEST).then(function (paths) {
        util.log('Deleted', chalk.yellow(paths && paths.join(', ') || '-'));
        done();
    });
}
function cleanTmp(done) {
    del(config_1.TMP_DIR).then(function (paths) {
        util.log('Deleted', chalk.yellow(paths && paths.join(', ') || '-'));
        done();
    });
}
module.exports = function clean(gulp, plugins, option) {
    return function (done) {
        switch (option) {
            case 'all':
                cleanAll(done);
                break;
            case 'dist':
                cleanDist(done);
                break;
            case 'test':
                cleanTest(done);
                break;
            case 'tmp':
                cleanTmp(done);
                break;
            default: done();
        }
    };
};
//# sourceMappingURL=clean.js.map