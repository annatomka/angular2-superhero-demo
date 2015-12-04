import {Component, View,NgFor,NgIf} from 'angular2/angular2';
import {FirebaseService} from './service';
import {LatestComponent} from './latest';
import {AdsenseComponent} from './ad';

@Component({
    selector: 'statistics',
    componentServices: [FirebaseService]
})
@View({
    templateUrl: "template/statistics.html",
    directives: [NgFor,NgIf,LatestComponent,AdsenseComponent]
})
export class Statistics {
    dataRef:Firebase;
    voteBatman:number;
    voteSuperman:number;
    allVotes: number;
    votes:Array<Object>;
    barChart: any;
    resultText: String;
    shareText: String;

    constructor() {
        this.dataRef = new FirebaseService().dataRef;
        this.votes = [];
        this.voteBatman = 0;
        this.voteSuperman = 0;

        var self = this;

        this.dataRef.orderByChild('vote').equalTo('batman').on('value',function(data){
            self.voteBatman = data.numChildren();
            self.updateValuesAndDraw(data);
            self.generateResultText();
            self.generateShareText();
        });

        this.dataRef.orderByChild('vote').equalTo('superman').on('value',function(data){
            self.voteSuperman = data.numChildren();
            self.updateValuesAndDraw(data);
            self.generateResultText();
            self.generateShareText();
        });
    }

    generateResultText(){
        if(this.voteBatman == this.voteSuperman){
            this.resultText = "Batman and Superman is equally awesome right now.";
        }
        this.resultText = (this.voteBatman>this.voteSuperman? "Batman": "Superman") + " is better right now.";
    }

    generateShareText(){
        this.shareText = 'http://twitter.com/share?hashtags=batmanvsuperman,batman,superman,angular2,javascript,vote&text=' + this.resultText + ' Vote who is better?' + '&url='+window.location.origin;
    }

    updateValuesAndDraw(data){
        this.allVotes = this.voteBatman + this.voteSuperman;
        this.drawBarChart();
        this.drawPieChart();
    }
    drawBarChart(){
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
    }
    drawPieChart(){
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
            labelInterpolationFnc: function(value,blabla,param) {
                return value
            }
        };
        var sum = function(a, b) { return a + b };

        new Chartist.Pie('.pie-chart', data, options );
    }
}