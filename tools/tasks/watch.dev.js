var path_1 = require('path');
var config_1 = require('../config');
module.exports = function watchDev(gulp, plugins) {
    return function () {
        plugins.watch(path_1.join(config_1.APP_SRC, '**/*'), function () { return gulp.start('build.dev'); });
    };
};
//# sourceMappingURL=watch.dev.js.map