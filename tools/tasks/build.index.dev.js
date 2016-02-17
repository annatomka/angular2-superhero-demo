var path_1 = require('path');
var config_1 = require('../config');
var utils_1 = require('../utils');
module.exports = function buildIndexDev(gulp, plugins) {
    return function () {
        return gulp.src(path_1.join(config_1.APP_SRC, 'index.html'))
            .pipe(inject('shims'))
            .pipe(inject('libs'))
            .pipe(inject())
            .pipe(plugins.template(utils_1.templateLocals()))
            .pipe(gulp.dest(config_1.APP_DEST));
    };
    function inject(name) {
        return plugins.inject(gulp.src(getInjectablesDependenciesRef(name), { read: false }), {
            name: name,
            transform: utils_1.transformPath(plugins, 'dev')
        });
    }
    function getInjectablesDependenciesRef(name) {
        return config_1.DEV_DEPENDENCIES
            .filter(function (dep) { return dep['inject'] && dep['inject'] === (name || true); })
            .map(mapPath);
    }
    function mapPath(dep) {
        var envPath = dep.src;
        if (envPath.startsWith(config_1.APP_SRC)) {
            envPath = path_1.join(config_1.APP_DEST, dep.src.replace(config_1.APP_SRC, ''));
        }
        return envPath;
    }
};
//# sourceMappingURL=build.index.dev.js.map