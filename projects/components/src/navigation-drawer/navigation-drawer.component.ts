import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { AnimationDurations, MatRippleModule } from '@angular/material/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { slideInOutAnimationFactory } from '../animations/slide.animation';

@Component({
  selector: 'sl-navigation-drawer',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatRippleModule,
    RouterLink,
    RouterLinkActive,
    MatIconModule,
  ],
  templateUrl: './navigation-drawer.component.html',
  styleUrls: ['./navigation-drawer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideInOutAnimationFactory('X', '-100%', '0')]
})
export class NavigationDrawerComponent {
  @HostBinding('@slideInOut')
  private slideInOut = true;
}
