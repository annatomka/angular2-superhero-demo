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
var promoter_service_1 = require('./promoter.service');
var PromoterComponent = (function () {
    function PromoterComponent() {
        if (!promoter_service_1.PromoterService.isLoaded) {
            var s = document.createElement('script');
            s.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
            document.body.appendChild(s);
            promoter_service_1.PromoterService.isLoaded = true;
        }
        try {
            if (!window.adsbygoogle) {
                window.adsbygoogle = [];
            }
            window.adsbygoogle.push({});
        }
        catch (e) {
            console.error(e);
        }
    }
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', String)
    ], PromoterComponent.prototype, "client", void 0);
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', String)
    ], PromoterComponent.prototype, "slot", void 0);
    PromoterComponent = __decorate([
        angular2_1.Component({
            selector: 'promoter-component',
            template: '<div><ins class="adsbygoogle" [attr.data-ad-client]="client" [attr.data-ad-slot]="slot" style="display:block;width: 100%;" data-ad-format="auto"></ins></div>'
        }), 
        __metadata('design:paramtypes', [])
    ], PromoterComponent);
    return PromoterComponent;
})();
exports.PromoterComponent = PromoterComponent;
//# sourceMappingURL=promoter.component.js.map