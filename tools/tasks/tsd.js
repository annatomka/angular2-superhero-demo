module.exports = function tsd(gulp, plugins) {
    return plugins.shell.task([
        'tsd reinstall --clean',
        'tsd link',
        'tsd rebundle'
    ]);
};
//# sourceMappingURL=tsd.js.map