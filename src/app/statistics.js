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