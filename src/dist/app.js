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
var form_1 = require('./form');
var statistics_1 = require('./statistics');
var footer_1 = require('./footer');
var MyAppComponent = (function () {
    function MyAppComponent() {
    }
    MyAppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            templateUrl: "template/app.html",
            directives: [form_1.SuperForm, statistics_1.Statistics, footer_1.FooterContent]
        }), 
        __metadata('design:paramtypes', [])
    ], MyAppComponent);
    return MyAppComponent;
})();
angular2_1.bootstrap(MyAppComponent);
//# sourceMappingURL=app.js.map
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
/// <reference path="../../typings/angular2/angular2.d.ts" />
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
var SuperForm = (function () {
    function SuperForm() {
        this.dataRef = new service_1.FirebaseService().dataRef;
    }
    SuperForm.prototype.addVote = function (vote) {
        this.dataRef.push(vote);
    };
    SuperForm.prototype.vote = function (superhero, username) {
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
                self.addVote({ name: username, vote: superhero, date: new Date().getTime() });
                Materialize.toast('You voted for&nbsp;<b> ' + superhero + '</b>. Thanks!', 4000);
            }
        });
    };
    SuperForm = __decorate([
        angular2_1.Component({
            selector: 'super-form',
            componentServices: [service_1.FirebaseService]
        }),
        angular2_1.View({
            templateUrl: "template/form.html"
        }), 
        __metadata('design:paramtypes', [])
    ], SuperForm);
    return SuperForm;
})();
exports.SuperForm = SuperForm;
//# sourceMappingURL=form.js.map
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
        this.dataRef.orderByChild("date").limitToLast(10).on('value', function (data) {
            self.votes = [];
            data.forEach(function (childSnapshot) {
                var childData = childSnapshot.val();
                self.votes.unshift(childData);
            });
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