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
var Statistics = (function () {
    function Statistics() {
        this.dataRef = new service_1.FirebaseService().dataRef;
        this.votes = [];
        this.voteBatman = 0;
        this.voteSuperman = 0;
        var self = this;
        this.dataRef.on('value', function (dataSnap) {
            self.updateOnNewVote();
        });
        $('ul.tabs').tabs();
    }
    Statistics.prototype.updateOnNewVote = function () {
        this.calculateLastVotes();
        this.calculateSummaryVotes();
        this.drawCharts();
    };
    Statistics.prototype.drawCharts = function () {
        this.drawBarChart();
        this.drawPieChart();
    };
    Statistics.prototype.drawBarChart = function () {
        new Chartist.Bar('.bar-chart', {
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
    Statistics.prototype.calculateLastVotes = function () {
        var self = this;
        this.dataRef.orderByChild("date").limitToLast(10).on('value', function (data) {
            self.votes = [];
            data.forEach(function (childSnapshot) {
                var childData = childSnapshot.val();
                self.votes.unshift(childData);
            });
        });
    };
    Statistics.prototype.calculateSummaryVotes = function () {
        var self = this;
        this.dataRef.orderByChild('vote').equalTo('batman').on('value', function (data) {
            self.voteBatman = data.numChildren();
        });
        this.dataRef.orderByChild('vote').equalTo('superman').on('value', function (data) {
            self.voteSuperman = data.numChildren();
        });
        self.allVotes = self.voteBatman + self.voteSuperman;
    };
    Statistics = __decorate([
        angular2_1.Component({
            selector: 'statistics',
            componentServices: [service_1.FirebaseService]
        }),
        angular2_1.View({
            templateUrl: "template/statistics.html",
            directives: [angular2_1.For]
        }), 
        __metadata('design:paramtypes', [])
    ], Statistics);
    return Statistics;
})();
exports.Statistics = Statistics;
