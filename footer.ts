/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'footer-content'
})
@View({
    templateUrl: "template/footer.html"
})
export class FooterContent {
    constructor() {
    }
}