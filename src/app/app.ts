import {Component, View, bootstrap,FORM_DIRECTIVES, NgFor} from 'angular2/angular2';
import {SuperForm} from './form';
import {Statistics} from './statistics';
import {FooterContent} from './footer';

@Component({
    selector: 'my-app',
    templateUrl: "template/app.html",
    directives: [SuperForm,Statistics,FooterContent]
})
// Component controller
class MyAppComponent {
    constructor() {
    }
}

bootstrap(MyAppComponent);