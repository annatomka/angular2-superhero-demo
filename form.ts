import {Component, View,For,If} from 'angular2/angular2';
import {FirebaseService} from 'service';

@Component({
    selector: 'super-form',
    componentServices: [FirebaseService]
})
@View({
    templateUrl: "template/form.html",
    directives: [For,If]
})
export class SuperForm {
    dataRef: Firebase;
    constructor() {
        this.dataRef = new FirebaseService().dataRef;
    }
    addVote(vote){
        this.dataRef.push(vote);
    }

    vote(superhero: string, username: string) {
        Materialize.toast('You voted for&nbsp;<b> '+superhero+'</b>. Thanks!', 4000)
        this.addVote({name: username, vote: superhero,date: new Date().getTime()})
    }
}