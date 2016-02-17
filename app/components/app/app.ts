import {Component, View} from 'angular2/core';
import {FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/common';
import { ROUTER_DIRECTIVES,RouteConfig,
  RouterLink, RouterOutlet} from 'angular2/router';
//import {SuperForm} from './form';
//import {Statistics} from './statistics';
//import {FooterContent} from './footer';
//import {LatestComponent} from './latest';
//import {AboutComponent} from './about';

@Component({
  selector: 'my-app',
  templateUrl: './components/app/app.html',
  directives: [ROUTER_DIRECTIVES,RouterLink, RouterOutlet]
})
//
//@RouteConfig([
//  {path: '/', component: SuperForm, name: 'Home'},
//  {path: '/statistics', component: Statistics, name: 'Statistics'},
//  {path: '/latest', component: LatestComponent, name: 'Latest'},
//  {path: '/about', component: AboutComponent, name: 'About'}
//])
class MyAppComponent {
  constructor() {
  }
}
