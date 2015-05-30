/// <reference path="typings/angular2/angular2.d.ts" />
/// <reference path="typings/firebase/firebase.d.ts" />

export class FirebaseService{
    dataRef: Firebase;
    constructor() {
        this.dataRef = new Firebase('https://boiling-inferno-1117.firebaseio.com/votes');
    }
}