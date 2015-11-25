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
var navigation_1 = require('./navigation');
var form_1 = require('./form');
var statistics_1 = require('./statistics');
var footer_1 = require('./footer');
var latest_1 = require('./latest');
var about_1 = require('./about');
var MyAppComponent = (function () {
    function MyAppComponent() {
    }
    MyAppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            templateUrl: "template/app.html",
            directives: [navigation_1.Navigation, form_1.SuperForm, statistics_1.Statistics, footer_1.FooterContent, router_1.ROUTER_DIRECTIVES, router_1.RouterLink, router_1.RouterOutlet]
        }),
        router_1.RouteConfig([
            { path: '/', component: form_1.SuperForm, name: 'Home' },
            { path: '/statistics', component: statistics_1.Statistics, name: 'Statistics' },
            { path: '/latest', component: latest_1.LatestComponent, name: 'Latest' },
            { path: '/about', component: about_1.AboutComponent, name: 'About' }
        ]), 
        __metadata('design:paramtypes', [])
    ], MyAppComponent);
    return MyAppComponent;
})();
angular2_1.bootstrap(MyAppComponent, [
    router_1.ROUTER_PROVIDERS,
    angular2_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
]);
//# sourceMappingURL=app.js.map
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
var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        angular2_1.Component({
            directives: [router_1.RouterLink, angular2_1.CORE_DIRECTIVES],
            templateUrl: "template/about.html",
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
})();
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.js.map
//# sourceMappingURL=bundle.js.map
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
var DateFormatPipe = (function () {
    function DateFormatPipe() {
    }
    DateFormatPipe.prototype.transform = function (value, args) {
        return moment(value).fromNow();
    };
    DateFormatPipe = __decorate([
        angular2_1.Pipe({
            name: 'dateformat'
        }), 
        __metadata('design:paramtypes', [])
    ], DateFormatPipe);
    return DateFormatPipe;
})();
exports.DateFormatPipe = DateFormatPipe;
//# sourceMappingURL=datepipe.js.map
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
var FooterContent = (function () {
    function FooterContent() {
    }
    FooterContent = __decorate([
        angular2_1.Component({
            selector: 'footer-content'
        }),
        angular2_1.View({
            templateUrl: "template/footer.html"
        }), 
        __metadata('design:paramtypes', [])
    ], FooterContent);
    return FooterContent;
})();
exports.FooterContent = FooterContent;
//# sourceMappingURL=footer.js.map
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
        if (username == "" || username == undefined) {
            Materialize.toast("You can't vote without a username!", 4000);
            return;
        }
        var alreadyVoted = false;
        self.dataRef.once("value", function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var key = childSnapshot.key();
                var childData = childSnapshot.val();
                if (childData.name == username) {
                    Materialize.toast("You can't vote because you already voted for " + childData.vote + "!", 4000);
                    alreadyVoted = true;
                    return true;
                }
            });
            if (alreadyVoted == false) {
                self.addVote({ name: username, vote: superhero, date: new Date().getTime(), comment: comment });
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
            componentServices: [service_1.FirebaseService, router_1.ROUTER_DIRECTIVES, angular2_1.CORE_DIRECTIVES],
            pipes: [datepipe_1.DateFormatPipe]
        }), 
        __metadata('design:paramtypes', [router_1.Location])
    ], SuperForm);
    return SuperForm;
})();
exports.SuperForm = SuperForm;
//# sourceMappingURL=form.js.map
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
            pipes: [datepipe_1.DateFormatPipe]
        }), 
        __metadata('design:paramtypes', [])
    ], LatestComponent);
    return LatestComponent;
})();
exports.LatestComponent = LatestComponent;
//# sourceMappingURL=latest.js.map
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
var Navigation = (function () {
    function Navigation() {
        $('.tooltipped').tooltip();
    }
    Navigation = __decorate([
        angular2_1.Component({
            selector: 'navigation',
            directives: [router_1.RouterLink],
            templateUrl: "template/navigation.html"
        }), 
        __metadata('design:paramtypes', [])
    ], Navigation);
    return Navigation;
})();
exports.Navigation = Navigation;
//# sourceMappingURL=navigation.js.map
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
var Statistics = (function () {
    function Statistics() {
        this.dataRef = new service_1.FirebaseService().dataRef;
        this.votes = [];
        this.voteBatman = 0;
        this.voteSuperman = 0;
        var self = this;
        this.dataRef.orderByChild('vote').equalTo('batman').on('value', function (data) {
            self.voteBatman = data.numChildren();
            self.updateValuesAndDraw(data);
        });
        this.dataRef.orderByChild('vote').equalTo('superman').on('value', function (data) {
            self.voteSuperman = data.numChildren();
            self.updateValuesAndDraw(data);
        });
    }
    Statistics.prototype.updateValuesAndDraw = function (data) {
        this.allVotes = this.voteBatman + this.voteSuperman;
        this.drawBarChart();
        this.drawPieChart();
    };
    Statistics.prototype.drawBarChart = function () {
        this.barChart = new Chartist.Bar('.bar-chart', {
            labels: ['Batman', 'Superman'],
            series: [this.voteBatman, this.voteSuperman]
        }, {
            distributeSeries: true,
            seriesBarDistance: 30,
            axisX: {
                showGrid: false
            }
        });
    };
    Statistics.prototype.drawPieChart = function () {
        var data = {
            labels: ['Batman', 'Superman'],
            series: [{
                    value: this.voteBatman,
                    name: 'Batman',
                    className: 'piechart-batman'
                }, {
                    value: this.voteSuperman,
                    name: 'Superman',
                    className: 'piechart-superman'
                }]
        };
        var options = {
            labelInterpolationFnc: function (value, blabla, param) {
                return value;
            }
        };
        var sum = function (a, b) { return a + b; };
        new Chartist.Pie('.pie-chart', data, options);
    };
    Statistics = __decorate([
        angular2_1.Component({
            selector: 'statistics',
            componentServices: [service_1.FirebaseService]
        }),
        angular2_1.View({
            templateUrl: "template/statistics.html",
            directives: [angular2_1.NgFor, angular2_1.NgIf]
        }), 
        __metadata('design:paramtypes', [])
    ], Statistics);
    return Statistics;
})();
exports.Statistics = Statistics;
//# sourceMappingURL=statistics.js.map