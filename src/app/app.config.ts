import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { taskReducer } from './store/reducers/task.reducer';
import { provideEffects } from '@ngrx/effects';
import { TaskEffects } from './store/effects/task.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({ tasks: taskReducer }),
    provideEffects([TaskEffects]),
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
  ],
};
