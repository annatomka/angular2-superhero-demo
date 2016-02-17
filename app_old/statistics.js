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
var service_1 = require('./service');
var latest_1 = require('./latest');
var promoter_component_1 = require('./promoter.component');
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
            self.generateResultText();
            self.generateShareText();
        });
        this.dataRef.orderByChild('vote').equalTo('superman').on('value', function (data) {
            self.voteSuperman = data.numChildren();
            self.updateValuesAndDraw(data);
            self.generateResultText();
            self.generateShareText();
        });
    }
    Statistics.prototype.generateResultText = function () {
        if (this.voteBatman == this.voteSuperman) {
            this.resultText = "Batman and Superman is equally awesome right now.";
        }
        this.resultText = (this.voteBatman > this.voteSuperman ? "Batman" : "Superman") + " is better right now.";
    };
    Statistics.prototype.generateShareText = function () {
        this.shareText = 'http://twitter.com/share?hashtags=batmanvsuperman,batman,superman,angular2,javascript,vote&text=' + this.resultText + ' Vote who is better?' + '&url=' + window.location.origin;
    };
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
            directives: [angular2_1.NgFor, angular2_1.NgIf, latest_1.LatestComponent, promoter_component_1.PromoterComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], Statistics);
    return Statistics;
})();
exports.Statistics = Statistics;
//# sourceMappingURL=statistics.js.map