import {Component, View} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';

@Component({
    selector: 'navigation',
    directives: [RouterLink],
    templateUrl: "template/navigation.html"
})
export class Navigation {
    constructor() {
        $('.tooltipped').tooltip();
    }
}