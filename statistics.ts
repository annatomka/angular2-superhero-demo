import {Component, View,For} from 'angular2/angular2';
import {FirebaseService} from 'service';

@Component({
    selector: 'statistics',
    componentServices: [FirebaseService]
})
@View({
    templateUrl: "template/statistics.html",
    directives: [For]
})
export class Statistics {
    dataRef:Firebase;
    voteBatman:number;
    voteSuperman:number;
    votes:Array<Object>;

    constructor() {
        this.dataRef = new FirebaseService().dataRef;
        this.votes = [];
        this.voteBatman = 0;
        this.voteSuperman = 0;

        var self = this;
        this.dataRef.on('value', function (dataSnap) {
            self.updateOnNewVote();
        });

    }
    updateOnNewVote(){
        this.calculateLastVotes();
        this.calculateSummaryVotes();
        this.drawChart();
    }

    drawChart(){
        new Chartist.Bar('.ct-chart', {
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

    calculateLastVotes(){
        var self = this;
        this.dataRef.orderByChild("date").limitToLast(10).on('value',function(data){
            self.votes = [];
            data.forEach(function(childSnapshot) {
                var childData = childSnapshot.val();
                self.votes.unshift(childData);
            });
        });
    }

    calculateSummaryVotes(){
        var self = this;
        this.dataRef.orderByChild('vote').equalTo('batman').on('value',function(data){
            self.voteBatman = data.numChildren();
        });

        this.dataRef.orderByChild('vote').equalTo('superman').on('value',function(data){
            self.voteSuperman = data.numChildren();
        });
    }

}