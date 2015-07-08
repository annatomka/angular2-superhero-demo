/// <reference path="typings/angular2/angular2.d.ts" />

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

        this.dataRef.once("value", function(snapshot) {
            snapshot.forEach(function(childSnapshot){
                var key = childSnapshot.key();
                var childData = childSnapshot.val();
                if(childData.name == username) {
                    Materialize.toast("You can't vote because you already voted for " + childData.vote + "!", 4000);
                    return true;
                }
            });
        });

        if(username == "" || username == undefined) {
            Materialize.toast("You can't vote without a username!", 4000);
            return;
        }
        this.addVote({name: username, vote: superhero,date: new Date().getTime()});
        Materialize.toast('You voted for&nbsp;<b> '+superhero+'</b>. Thanks!', 4000)
    }
}