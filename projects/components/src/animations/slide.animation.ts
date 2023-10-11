import { AnimationTriggerMetadata, animate, style, transition, trigger } from '@angular/animations';
import { getCSSPropertyValue } from '../utility/get-computed-style';
import { AnimationDirection } from './animation-direction.type';

export const slideInOutAnimationFactory = (
  direction: AnimationDirection,
  from: string,
  to: string,
  duration: string = getCSSPropertyValue('--md-sys-motion-duration-medium-3'),
  easing: string = getCSSPropertyValue('--md-sys-motion-easing-emphasized'),
): AnimationTriggerMetadata =>
  trigger('slideInOut', [
    transition(':enter', [
      style({
        opacity: 0.8,
        transform: `translate${direction}(${from})`,
      }),
      animate(
        `${duration} ${easing}`,
        style({
          opacity: 1,
          transform: `translate${direction}(${to})`,
        }),
      ),
    ]),
    transition(':leave', [
      style({
        transform: `translate${direction}(${to})`,
      }),
      animate(
        `${getCSSPropertyValue('--md-sys-motion-duration-short-3')} ${easing}`,
        style({
          opacity: 0.6,
          transform: `translate${direction}(${from})`,
        }),
      ),
    ]),
  ]);
