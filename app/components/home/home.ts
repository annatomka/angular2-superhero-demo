import {Component} from 'angular2/core';
import {Navigation} from '../navigation/navigation'

@Component({
  selector: 'home',
  templateUrl: './components/home/home.html',
  styleUrls: ['./components/home/home.css'],
  directives: [Navigation]
})
export class HomeCmp {}
