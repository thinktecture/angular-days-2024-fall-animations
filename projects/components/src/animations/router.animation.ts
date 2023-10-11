import {
  AnimationTriggerMetadata,
  animate,
  animateChild,
  group,
  query,
  sequence,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { getCSSPropertyValue } from '../utility/get-computed-style';

const routeReset = [
  style({ position: 'relative' }),
  query(
    ':enter, :leave',
    [
      style({
        width: 'calc(100% - 7rem)',
        marginLeft: '7rem',
        position: 'fixed',
        top: 0,
        left: 0,
        opacity: 0,
      }),
    ],
    { optional: true },
  ),
];

const defaultLeave = [
  style({ opacity: 1 }),
  animate(
    getCSSPropertyValue('--md-sys-motion-duration-short-3'),
    style({ opacity: 0, transform: 'translateY(1rem)' }),
  ),
];

const defaultEnter = [
  style({ opacity: 0, transform: 'translateY(1rem)' }),
  animate(
    getCSSPropertyValue('--md-sys-motion-duration-medium-3'),
    style({ opacity: 1, transform: 'translateY(0)' }),
  ),
];

export const RouterAnimations: AnimationTriggerMetadata = trigger('routerAnimation', [
  transition('* => messages, messages => *', [
    ...routeReset,
    group([
      query(':leave', [...defaultLeave], {
        optional: true,
      }),
      query(
        ':enter',
        [...defaultEnter, query('@listContainer', [animateChild()], { optional: true })],
        {
          optional: true,
        },
      ),
    ]),
  ]),
  transition('* => *', [
    ...routeReset,
    group([
      query(':leave', [...defaultLeave], { optional: true }),
      query(':enter', [...defaultEnter], { optional: true }),
    ]),
  ]),
]);
