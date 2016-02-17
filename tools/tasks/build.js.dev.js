var path_1 = require('path');
var config_1 = require('../config');
var utils_1 = require('../utils');
module.exports = function buildJSDev(gulp, plugins) {
    var tsProject = utils_1.tsProjectFn(plugins);
    return function () {
        var src = [
            path_1.join(config_1.APP_SRC, '**/*.ts'),
            '!' + path_1.join(config_1.APP_SRC, '**/*_spec.ts')
        ];
        var result = gulp.src(src)
            .pipe(plugins.plumber())
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.typescript(tsProject));
        return result.js
            .pipe(plugins.sourcemaps.write())
            .pipe(plugins.template(utils_1.templateLocals()))
            .pipe(gulp.dest(config_1.APP_DEST));
    };
};
//# sourceMappingURL=build.js.dev.js.map