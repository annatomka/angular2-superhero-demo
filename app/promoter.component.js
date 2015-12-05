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
            console.error(e); //TODO:
        }
    }
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', String)
    ], PromoterComponent.prototype, "client");
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', String)
    ], PromoterComponent.prototype, "slot");
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