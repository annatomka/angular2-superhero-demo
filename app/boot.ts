import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {  CanActivate,
  ROUTER_DIRECTIVES,
  ROUTER_PROVIDERS,
  RouteConfig,
  Location,
  LocationStrategy,
  HashLocationStrategy,
  RouterLink, RouterOutlet} from 'angular2/router';

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
