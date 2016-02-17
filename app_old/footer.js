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
var FooterContent = (function () {
    function FooterContent() {
    }
    FooterContent = __decorate([
        angular2_1.Component({
            selector: 'footer-content',
            directives: [router_1.RouterLink],
            templateUrl: "template/footer.html"
        }), 
        __metadata('design:paramtypes', [])
    ], FooterContent);
    return FooterContent;
})();
exports.FooterContent = FooterContent;
//# sourceMappingURL=footer.js.map