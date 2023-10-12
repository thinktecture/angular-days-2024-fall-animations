import { Directive, ElementRef, HostListener, Input, inject } from '@angular/core';
import { ViewTransitionStore } from './view-transition.store';
import { combineLatest, shareReplay, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Directive({
  selector: '[viewTransition]',
  standalone: true,
})
export class ViewTransitionDirective {
  private readonly elementRef = inject(ElementRef);
  private readonly viewTransitionStore = inject(ViewTransitionStore);

  @Input() viewTransition = '';
  @Input() triggerId?: number;
  @Input() activeClass = 'active';

  @HostListener('click')
  startTransition(): void {
    if (!this.triggerId || this.viewTransition === '') {
      return;
    }
    this.elementRef.nativeElement.classList.add(this.activeClass);
    this.viewTransitionStore.updateState({
      triggerId: this.triggerId,
      runningTransition: this.viewTransition,
    });
  }

  constructor() {
    combineLatest([
      this.viewTransitionStore.triggerId$,
      this.viewTransitionStore.runningTransition$,
    ])
      .pipe(
        tap(([triggerId, runningTransition]) => {
          if (triggerId === 0 && this.containsActiveClass()) {
            this.removeClass(this.activeClass);
          }
          if (runningTransition !== '') {
            this.addClass(runningTransition);
          }
          return triggerId;
        }),
        shareReplay(1),
        takeUntilDestroyed(),
      )
      .subscribe();
  }

  private containsActiveClass(): boolean {
    return this.elementRef.nativeElement.classList.contains(this.activeClass);
  }

  private addClass(cssClass: string): void {
    this.elementRef.nativeElement.classList.add(cssClass);
  }

  private removeClass(cssClass: string): void {
    this.elementRef.nativeElement.classList.remove(cssClass);
  }
}
