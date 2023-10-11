import {
  animate,
  animateChild,
  query,
  sequence,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { getCSSPropertyValue } from '../utility/get-computed-style';

export const ListItem = trigger('listItem', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-1.5rem)', scale: 0.8 }),
    animate(
      `${getCSSPropertyValue('--md-sys-motion-duration-medium-3')} ${getCSSPropertyValue(
        '--md-sys-motion-easing-decelerating',
      )}`,
      style({ opacity: 1, transform: 'translateY(0)', scale: 1 }),
    ),
  ]),
  transition(':leave', [
    sequence([
      animate(
        `${getCSSPropertyValue('--md-sys-motion-duration-short-3')} ${getCSSPropertyValue(
          '--md-sys-motion-easing-accelerating',
        )}`,
        style({
          transform: `translateX(-200%)`,
        }),
      ),
      animate(
        `${getCSSPropertyValue('--md-sys-motion-duration-short-3')} ease`,
        style({
          height: 0,
        }),
      ),
    ]),
  ]),
]);

export const ListContainer = trigger('listContainer', [
  transition(':enter, :leave', [
    query('@*', [
      stagger(getCSSPropertyValue('--md-sys-motion-duration-stagger-delay'), [animateChild()]),
    ]),
  ]),
]);
