var merge = require('merge-stream');
var path_1 = require('path');
var config_1 = require('../config');
module.exports = function buildJSDev(gulp, plugins) {
    return function () {
        return merge(minifyComponentCss(), prepareTemplates(), processExternalCss());
        function prepareTemplates() {
            return gulp.src(path_1.join(config_1.APP_SRC, '**', '*.html'))
                .pipe(gulp.dest(config_1.TMP_DIR));
        }
        function minifyComponentCss() {
            return gulp.src([
                path_1.join(config_1.APP_SRC, '**', '*.css'),
                '!' + path_1.join(config_1.APP_SRC, 'assets', '**', '*.css')
            ])
                .pipe(plugins.cssnano())
                .pipe(gulp.dest(config_1.TMP_DIR));
        }
        function processExternalCss() {
            return gulp.src(getExternalCss().map(function (r) { return r.src; }))
                .pipe(plugins.cssnano())
                .pipe(plugins.concat(config_1.CSS_PROD_BUNDLE))
                .pipe(gulp.dest(config_1.CSS_DEST));
        }
        function getExternalCss() {
            return config_1.PROD_DEPENDENCIES.filter(function (d) { return /\.css$/.test(d.src); });
        }
    };
};
//# sourceMappingURL=build.html_css.prod.js.map