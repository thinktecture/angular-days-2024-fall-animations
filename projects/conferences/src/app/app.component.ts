import { transition } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  BottomBarComponent,
  MediumAndLargeScreenSizeDirective,
  NavigationDrawerComponent,
  RouterAnimations,
  XSmallAndSmallScreenSizeDirective,
} from '@sl/components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationDrawerComponent,
    BottomBarComponent,
    XSmallAndSmallScreenSizeDirective,
    MediumAndLargeScreenSizeDirective,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    RouterAnimations
  ]
})
export class AppComponent {

  public prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
