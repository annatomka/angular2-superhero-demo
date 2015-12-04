var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var service_1 = require('./service');
var datepipe_1 = require('./datepipe');
var LatestComponent = (function () {
    function LatestComponent() {
        var self = this;
        this.dataRef = new service_1.FirebaseService().dataRef;
        this.dataRef.orderByChild("date").limitToLast(20).on('value', function (data) {
            self.votes = [];
            data.forEach(function (childSnapshot) {
                var childData = childSnapshot.val();
                self.votes.unshift(childData);
            });
        });
    }
    LatestComponent = __decorate([
        angular2_1.Component({
            directives: [router_1.RouterLink, angular2_1.CORE_DIRECTIVES],
            componentServices: [service_1.FirebaseService],
            templateUrl: "template/latest.html",
            pipes: [datepipe_1.DateFormatPipe],
            selector: 'latest-component'
        }), 
        __metadata('design:paramtypes', [])
    ], LatestComponent);
    return LatestComponent;
})();
exports.LatestComponent = LatestComponent;
//# sourceMappingURL=latest.js.map