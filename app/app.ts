import {Component, View, bootstrap,FORM_DIRECTIVES, NgFor} from 'angular2/angular2';
import {  CanActivate,
    RouteConfig,
    ComponentInstruction,
    ROUTER_DIRECTIVES,
    APP_BASE_HREF,
    CanReuse,
    RouteParams,
    OnReuse ,ROUTER_PROVIDERS,RouterLink, RouterOutlet} from 'angular2/router';
import {Navigation} from './navigation';
import {SuperForm} from './form';
import {Statistics} from './statistics';
import {FooterContent} from './footer';
import {LatestComponent} from './latest';

@Component({
    selector: 'my-app',
    templateUrl: "template/app.html",
    directives: [Navigation,SuperForm,Statistics,FooterContent,ROUTER_DIRECTIVES,RouterLink, RouterOutlet]
})

@RouteConfig([
    {path: '/', component: SuperForm, name: 'Home'},
    {path: '/statistics', component: Statistics, name: 'Statistics'},
    {path: '/latest', component: LatestComponent, name: 'Latest'},
    {path: '/about', component: Statistics, name: 'About'}
])
class MyAppComponent {
    constructor() {
    }
}

bootstrap(MyAppComponent, [
    ROUTER_PROVIDERS
]);