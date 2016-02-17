module.exports = function npm(gulp, plugins) {
    return plugins.shell.task([
        'npm prune'
    ]);
};
//# sourceMappingURL=npm.js.map