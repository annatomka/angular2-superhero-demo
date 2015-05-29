if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var service_1 = require('service');
var SuperForm = (function () {
    function SuperForm() {
        this.dataRef = new service_1.FirebaseService().dataRef;
    }
    SuperForm.prototype.addVote = function (vote) {
        this.dataRef.push(vote);
    };
    SuperForm.prototype.vote = function (superhero, username) {
        Materialize.toast('You voted for&nbsp;<b> ' + superhero + '</b>. Thanks!', 4000);
        this.addVote({ name: username, vote: superhero, date: new Date().getTime() });
    };
    SuperForm = __decorate([
        angular2_1.Component({
            selector: 'super-form',
            componentServices: [service_1.FirebaseService]
        }),
        angular2_1.View({
            templateUrl: "template/form.html",
            directives: [angular2_1.For, angular2_1.If]
        }), 
        __metadata('design:paramtypes', [])
    ], SuperForm);
    return SuperForm;
})();
exports.SuperForm = SuperForm;
