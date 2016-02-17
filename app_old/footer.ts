import {Component, View} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';

@Component({
    selector: 'footer-content',
    directives: [RouterLink],
    templateUrl: "template/footer.html"
})
export class FooterContent {
    constructor() {
    }
}