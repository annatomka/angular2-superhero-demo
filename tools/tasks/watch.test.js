var path_1 = require('path');
var config_1 = require('../config');
module.exports = function watchTest(gulp, plugins) {
    return function () {
        plugins.watch(path_1.join(config_1.APP_SRC, '**/*.ts'), function () { return gulp.start('build.test'); });
    };
};
//# sourceMappingURL=watch.test.js.map