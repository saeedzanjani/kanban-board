import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  addTask,
  removeTask,
  updateTasks,
  loadTasks,
  handleError,
  loadTasksSuccess,
} from '../actions/task.actions';
import { catchError, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { selectTasks } from '../selectors/task.selectors';
import { Store } from '@ngrx/store';
import { getDataFromLocalStorage } from '../../utils/task.utils';

@Injectable()
export class TaskEffects {
  constructor(private actions$: Actions, private store: Store) {}

  loadTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTasks),
      switchMap(() => {
        const tasks = getDataFromLocalStorage('tasks');
        console.log('Loaded tasks from local storage:', tasks);
        return of(loadTasksSuccess({ tasks }));
      }),
      catchError((error) => {
        console.error('Error in effect:', error);
        return of(handleError({ error: error.message }));
      })
    )
  );

  saveTasksToLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addTask, removeTask, updateTasks),
        withLatestFrom(this.store.select(selectTasks)),
        tap(([action, tasks]) => {
          console.log('Saving tasks to local storage:', tasks); // Add this line
          try {
            localStorage.setItem('tasks', JSON.stringify(tasks));
          } catch (error) {
            console.error('Error saving tasks:', error);
          }
        }),
        catchError((error) => {
          console.error('Error in effect:', error);
          return of(handleError({ error: error.message }));
        })
      ),
    { dispatch: false }
  );
}
