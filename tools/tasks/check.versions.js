var config_1 = require('../config');
function reportError(message) {
    console.error(require('chalk').white.bgRed.bold(message));
    process.exit(1);
}
module.exports = function check(gulp, plugins) {
    return function () {
        var exec = require('child_process').exec;
        var semver = require('semver');
        exec('npm --version', function (error, stdout, stderr) {
            if (error !== null) {
                reportError('npm preinstall error: ' + error + stderr);
            }
            if (!semver.gte(stdout, config_1.VERSION_NPM)) {
                reportError('NPM is not in required version! Required is ' + config_1.VERSION_NPM + ' and you\'re using ' + stdout);
            }
        });
        exec('node --version', function (error, stdout, stderr) {
            if (error !== null) {
                reportError('npm preinstall error: ' + error + stderr);
            }
            if (!semver.gte(stdout, config_1.VERSION_NODE)) {
                reportError('NODE is not in required version! Required is ' + config_1.VERSION_NODE + ' and you\'re using ' + stdout);
            }
        });
    };
};
//# sourceMappingURL=check.versions.js.map