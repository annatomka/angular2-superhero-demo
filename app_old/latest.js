var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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