import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';
import {FirebaseService} from './service';
import { ROUTER_DIRECTIVES,
    ROUTER_PROVIDERS,
    RouteConfig,RouterLink,
    Location} from 'angular2/router';
import {DateFormatPipe} from './datepipe';

@Component({
    selector: 'super-form',
    templateUrl: "template/form.html",
    directives: [RouterLink],
    componentServices: [FirebaseService,ROUTER_DIRECTIVES,CORE_DIRECTIVES],
    pipes: [DateFormatPipe]
})
export class SuperForm {
    dataRef: Firebase;
    latestVote: any;

    constructor(location: Location) {
            (adsbygoogle = window.adsbygoogle || []).push({});
        var self = this;
        this.dataRef = new FirebaseService().dataRef;
        this.location = location;

        this.dataRef.once("value", function(snap) {
            //TODO: display initial state...
            // Object.keys not supported in IE 8, but has a polyfill: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
            var keys = Object.keys(snap.val()||{});
            var lastIdInSnapshot = keys[keys.length-1]

            self.dataRef.orderByKey().startAt(lastIdInSnapshot).on("child_added", function(newMessSnapshot) {
                if( snap.key() === lastIdInSnapshot ) { return; };
                console.log('new record', snap.key());
                self.latestVote = newMessSnapshot.val();
            });
        });
    }
    addVote(vote){
        this.dataRef.push(vote);
    }

    vote(superhero: string, username: string, comment: string) {
        var self = this;
        var usernameTrimmed = username.trim();

        if(usernameTrimmed == "" || usernameTrimmed == undefined) {
            Materialize.toast("You can't vote without a username!", 4000);
            return;
        }

        var alreadyVoted = false;
        self.dataRef.once("value", function(snapshot) {

            snapshot.forEach(function(childSnapshot){
                var key = childSnapshot.key();
                var childData = childSnapshot.val();
                if(childData.name == usernameTrimmed) {
                    Materialize.toast("You can't vote because you already voted for " + childData.vote + "!", 4000);
                    alreadyVoted = true;
                    return true;
                }
            });

            if(alreadyVoted == false ){
                self.addVote({name: usernameTrimmed, vote: superhero,date: new Date().getTime(), comment: comment });
                //Materialize.toast('You voted for&nbsp;<b> '+superhero+'</b>. Thanks!', 4000);
                self.location.go('/statistics');
                window.location.reload();
            }
        });


    }
}