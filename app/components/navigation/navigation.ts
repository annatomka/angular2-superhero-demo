import {Component, View} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteConfig} from 'angular2/router';
import {AboutComponent} from '../about/about';
import {HomeCmp} from '../home/home';

@Component({
    selector: 'navigation',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: './components/navigation/navigation.html'
})

@RouteConfig([
  //{path: '/', component: SuperForm, name: 'Home'},
  //{path: '/statistics', component: Statistics, name: 'Statistics'},
  //{path: '/latest', component: LatestComponent, name: 'Latest'},
  {path: '/about', component: AboutComponent, name: 'About'},
  {path: '/home', component: HomeCmp, name: 'Home'}
])
export class Navigation {
    constructor() {
        //$('.tooltipped').tooltip();
    }
}
