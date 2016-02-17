var merge = require('merge-stream');
var path_1 = require('path');
var browserify = require('browserify');
var config_1 = require('../config');
module.exports = function bundles(gulp, plugins) {
    return function () {
        return merge(bundleShims(), bundleApp());
        function getShims() {
            var libs = config_1.PROD_DEPENDENCIES
                .filter(function (d) { return /\.js$/.test(d.src); });
            return libs.filter(function (l) { return l.inject === 'shims'; })
                .concat(libs.filter(function (l) { return l.inject === 'libs'; }))
                .concat(libs.filter(function (l) { return l.inject === true; }))
                .map(function (l) { return l.src; });
        }
        function bundleShims() {
            return gulp.src(getShims())
                .pipe(plugins.uglify({
                mangle: false
            }))
                .pipe(plugins.concat(config_1.JS_PROD_SHIMS_BUNDLE))
                .pipe(gulp.dest(config_1.JS_DEST));
        }
        function bundleApp() {
            return browserify(path_1.join(config_1.TMP_DIR, 'bootstrap'))
                .bundle()
                .pipe(require('vinyl-source-stream')(config_1.JS_PROD_APP_BUNDLE))
                .pipe(require('vinyl-buffer')())
                .pipe(plugins.uglify({
                mangle: false
            }))
                .pipe(gulp.dest(config_1.JS_DEST));
        }
    };
};
//# sourceMappingURL=build.bundles.js.map