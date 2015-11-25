import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';
import {FirebaseService} from './service';
import {DateFormatPipe} from './datepipe';

@Component({
    directives: [RouterLink,CORE_DIRECTIVES],
    templateUrl: "template/about.html",
})
export class AboutComponent {
    constructor() {

    }
}