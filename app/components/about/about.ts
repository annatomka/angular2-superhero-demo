import {Component, View} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {RouterLink} from 'angular2/router';
//import {FirebaseService} from './service';
//import {DateFormatPipe} from './datepipe';

@Component({
  directives: [RouterLink,CORE_DIRECTIVES],
  templateUrl: './components/about/about.html'
})
export class AboutComponent {
  constructor() {

  }
}
