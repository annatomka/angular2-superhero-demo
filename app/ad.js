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
var adservice_1 = require('./adservice');
var AdsenseComponent = (function () {
    function AdsenseComponent() {
        if (!adservice_1.AdService.isLoaded) {
            var s = document.createElement('script');
            s.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
            document.body.appendChild(s);
            adservice_1.AdService.isLoaded = true;
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
    ], AdsenseComponent.prototype, "client");
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', String)
    ], AdsenseComponent.prototype, "slot");
    AdsenseComponent = __decorate([
        angular2_1.Component({
            selector: 'adsense-component',
            template: '<div><ins class="adsbygoogle" [attr.data-ad-client]="client" [attr.data-ad-slot]="slot" style="display:block;width: 100%;" data-ad-format="auto"></ins></div>'
        }), 
        __metadata('design:paramtypes', [])
    ], AdsenseComponent);
    return AdsenseComponent;
})();
exports.AdsenseComponent = AdsenseComponent;
//# sourceMappingURL=ad.js.map