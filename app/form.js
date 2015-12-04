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
var service_1 = require('./service');
var router_1 = require('angular2/router');
var datepipe_1 = require('./datepipe');
var SuperForm = (function () {
    function SuperForm(location) {
        (adsbygoogle = window.adsbygoogle || []).push({});
        var self = this;
        this.dataRef = new service_1.FirebaseService().dataRef;
        this.location = location;
        this.dataRef.once("value", function (snap) {
            //TODO: display initial state...
            // Object.keys not supported in IE 8, but has a polyfill: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
            var keys = Object.keys(snap.val() || {});
            var lastIdInSnapshot = keys[keys.length - 1];
            self.dataRef.orderByKey().startAt(lastIdInSnapshot).on("child_added", function (newMessSnapshot) {
                if (snap.key() === lastIdInSnapshot) {
                    return;
                }
                ;
                console.log('new record', snap.key());
                self.latestVote = newMessSnapshot.val();
            });
        });
    }
    SuperForm.prototype.addVote = function (vote) {
        this.dataRef.push(vote);
    };
    SuperForm.prototype.vote = function (superhero, username, comment) {
        var self = this;
        var usernameTrimmed = username.trim();
        if (usernameTrimmed == "" || usernameTrimmed == undefined) {
            Materialize.toast("You can't vote without a username!", 4000);
            return;
        }
        var alreadyVoted = false;
        self.dataRef.once("value", function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var key = childSnapshot.key();
                var childData = childSnapshot.val();
                if (childData.name == usernameTrimmed) {
                    Materialize.toast("You can't vote because you already voted for " + childData.vote + "!", 4000);
                    alreadyVoted = true;
                    return true;
                }
            });
            if (alreadyVoted == false) {
                self.addVote({ name: usernameTrimmed, vote: superhero, date: new Date().getTime(), comment: comment });
                //Materialize.toast('You voted for&nbsp;<b> '+superhero+'</b>. Thanks!', 4000);
                self.location.go('/statistics');
                window.location.reload();
            }
        });
    };
    SuperForm = __decorate([
        angular2_1.Component({
            selector: 'super-form',
            templateUrl: "template/form.html",
            directives: [router_1.RouterLink],
            componentServices: [service_1.FirebaseService, router_1.ROUTER_DIRECTIVES, angular2_1.CORE_DIRECTIVES],
            pipes: [datepipe_1.DateFormatPipe]
        }), 
        __metadata('design:paramtypes', [router_1.Location])
    ], SuperForm);
    return SuperForm;
})();
exports.SuperForm = SuperForm;
//# sourceMappingURL=form.js.map