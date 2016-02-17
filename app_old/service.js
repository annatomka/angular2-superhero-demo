var FirebaseService = (function () {
    function FirebaseService() {
        this.dataRef = new Firebase('https://boiling-inferno-1117.firebaseio.com/votes');
    }
    return FirebaseService;
})();
exports.FirebaseService = FirebaseService;
//# sourceMappingURL=service.js.map