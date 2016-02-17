var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var testing_1 = require('angular2/testing');
var core_1 = require('angular2/core');
var dom_adapter_1 = require('angular2/src/platform/dom/dom_adapter');
var about_1 = require('./about');
var name_list_1 = require('../../services/name_list');
function main() {
    testing_1.describe('About component', function () {
        testing_1.it('should work', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
            return tcb.createAsync(TestComponent)
                .then(function (rootTC) {
                rootTC.detectChanges();
                var aboutInstance = rootTC.debugElement.componentViewChildren[0].componentInstance;
                var aboutDOMEl = rootTC.debugElement.componentViewChildren[0].nativeElement;
                var nameListLen = function () {
                    return aboutInstance.list.names.length;
                };
                testing_1.expect(aboutInstance.list).toEqual(jasmine.any(name_list_1.NameList));
                testing_1.expect(nameListLen()).toEqual(4);
                testing_1.expect(dom_adapter_1.DOM.querySelectorAll(aboutDOMEl, 'li').length).toEqual(nameListLen());
                aboutInstance.newName = 'Minko';
                aboutInstance.addName();
                rootTC.detectChanges();
                testing_1.expect(nameListLen()).toEqual(5);
                testing_1.expect(dom_adapter_1.DOM.querySelectorAll(aboutDOMEl, 'li').length).toEqual(nameListLen());
                testing_1.expect(dom_adapter_1.DOM.querySelectorAll(aboutDOMEl, 'li')[4].textContent).toEqual('Minko');
            });
        }));
    });
}
exports.main = main;
var TestComponent = (function () {
    function TestComponent() {
    }
    TestComponent = __decorate([
        core_1.Component({
            providers: [name_list_1.NameList],
            selector: 'test-cmp',
            template: '<div><about></about></div>',
            directives: [about_1.AboutCmp]
        }), 
        __metadata('design:paramtypes', [])
    ], TestComponent);
    return TestComponent;
})();
//# sourceMappingURL=about_spec.js.map