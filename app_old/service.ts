export class FirebaseService{
    dataRef: Firebase;
    constructor() {
        this.dataRef = new Firebase('https://boiling-inferno-1117.firebaseio.com/votes');
    }
}
