var path_1 = require('path');
var utils_1 = require('../utils');
var config_1 = require('../config');
module.exports = function buildIndexProd(gulp, plugins) {
    return function () {
        return gulp.src(path_1.join(config_1.APP_SRC, 'index.html'))
            .pipe(injectJs())
            .pipe(injectCss())
            .pipe(plugins.template(utils_1.templateLocals()))
            .pipe(gulp.dest(config_1.APP_DEST));
    };
    function inject() {
        var files = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            files[_i - 0] = arguments[_i];
        }
        return plugins.inject(gulp.src(files, {
            read: false
        }), {
            transform: function (filepath) {
                var path = filepath.split(path_1.sep);
                arguments[0] = path.slice(path.length - 2, path.length).join(path_1.sep);
                return plugins.inject.transform.apply(plugins.inject.transform, arguments);
            }
        });
    }
    function injectJs() {
        return inject(path_1.join(config_1.JS_DEST, config_1.JS_PROD_SHIMS_BUNDLE), path_1.join(config_1.JS_DEST, config_1.JS_PROD_APP_BUNDLE));
    }
    function injectCss() {
        return inject(path_1.join(config_1.CSS_DEST, config_1.CSS_PROD_BUNDLE));
    }
};
//# sourceMappingURL=build.index.prod.js.map