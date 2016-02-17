var path_1 = require('path');
var config_1 = require('../config');
var utils_1 = require('../utils');
module.exports = function buildTest(gulp, plugins) {
    return function () {
        var tsProject = utils_1.tsProjectFn(plugins);
        var src = [
            path_1.join(config_1.APP_SRC, '**/*.ts'),
            '!' + path_1.join(config_1.APP_SRC, 'bootstrap.ts')
        ];
        var result = gulp.src(src)
            .pipe(plugins.plumber())
            .pipe(plugins.inlineNg2Template({ base: config_1.APP_SRC }))
            .pipe(plugins.typescript(tsProject));
        return result.js
            .pipe(gulp.dest(config_1.TEST_DEST));
    };
};
//# sourceMappingURL=build.test.js.map