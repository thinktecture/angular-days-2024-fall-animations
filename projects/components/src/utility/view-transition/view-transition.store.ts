import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

interface ViewTransitionState {
  triggerId: number;
  runningTransition: string;
}

@Injectable({
  providedIn: 'root',
})
export class ViewTransitionStore extends ComponentStore<ViewTransitionState> {
  triggerId$ = this.select(({ triggerId }) => triggerId);
  runningTransition$ = this.select(({ runningTransition }) => runningTransition);

  constructor() {
    super({ triggerId: 0, runningTransition: '' });
  }

  resetState(): void {
    this.setState({ triggerId: 0, runningTransition: '' });
  }

  updateState = this.updater((state, config: ViewTransitionState) => ({
    ...state,
    ...config,
  }));
}
