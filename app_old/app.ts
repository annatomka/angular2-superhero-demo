import {Component, View, bootstrap,FORM_DIRECTIVES, NgFor,provide} from 'angular2/angular2';
import {  CanActivate,
    ROUTER_DIRECTIVES,
    ROUTER_PROVIDERS,
    RouteConfig,
    Location,
    LocationStrategy,
    HashLocationStrategy,
    RouterLink, RouterOutlet} from 'angular2/router';
import {Navigation} from './navigation';
import {SuperForm} from './form';
import {Statistics} from './statistics';
import {FooterContent} from './footer';
import {LatestComponent} from './latest';
import {AboutComponent} from './about';

@Component({
    selector: 'my-app',
    templateUrl: "template/app.html",
    directives: [Navigation,SuperForm,Statistics,FooterContent,ROUTER_DIRECTIVES,RouterLink, RouterOutlet]
})

@RouteConfig([
    {path: '/', component: SuperForm, name: 'Home'},
    {path: '/statistics', component: Statistics, name: 'Statistics'},
    {path: '/latest', component: LatestComponent, name: 'Latest'},
    {path: '/about', component: AboutComponent, name: 'About'}
])
class MyAppComponent {
    constructor() {
    }
}

bootstrap(MyAppComponent,  [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
