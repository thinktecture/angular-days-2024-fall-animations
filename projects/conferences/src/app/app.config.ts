import { ApplicationConfig, inject } from '@angular/core';
import {
  ViewTransitionInfo,
  provideRouter,
  withComponentInputBinding,
  withViewTransitions,
} from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ViewTransitionStore } from '@sl/components';

const restetViewTransitionState = ({ transition }: ViewTransitionInfo) => {
  const viewtTransitionStore = inject(ViewTransitionStore);
  transition.finished.then(() => {
    viewtTransitionStore.resetState();
  });
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withComponentInputBinding(),
      withViewTransitions({
        onViewTransitionCreated: restetViewTransitionState,
      }),
    ),
    provideAnimations(),
  ],
};
