/// <reference path="../../typings/angular2/angular2.d.ts" />
/// <reference path="typings/firebase/firebase.d.ts" />
var FirebaseService = (function () {
    function FirebaseService() {
        this.dataRef = new Firebase('https://boiling-inferno-1117.firebaseio.com/votes');
    }
    return FirebaseService;
})();
exports.FirebaseService = FirebaseService;
//# sourceMappingURL=service.js.map