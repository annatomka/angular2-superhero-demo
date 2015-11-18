import {Component, View} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';
import {FirebaseService} from './service';

@Component({
    directives: [RouterLink],
    componentServices: [FirebaseService],
    templateUrl: "template/latest.html"
})
export class LatestComponent {
    dataRef:Firebase;
    allVotes: number;
    votes:Array<Object>;
    constructor() {
        var self = this;
        this.dataRef = new FirebaseService().dataRef;

        this.dataRef.orderByChild("date").limitToLast(20).on('value',function(data){
            self.votes = [];
            data.forEach(function(childSnapshot) {
                var childData = childSnapshot.val();
                self.votes.unshift(childData);
            });
        });
    }
}