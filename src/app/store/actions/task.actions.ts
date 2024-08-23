import { createAction, props } from '@ngrx/store';
import { Task } from '../../models/task.model';

export const loadTasks = createAction('[Task] Load Tasks');
export const loadTasksSuccess = createAction(
  '[Task] Load Tasks Success',
  props<{ tasks: Task[] }>()
);
export const addTask = createAction(
  '[Task] Add Task',
  props<{ id: string; description: string }>()
);
export const removeTask = createAction(
  '[Task] Remove Task',
  props<{ taskId: string }>()
);
export const updateTasks = createAction(
  '[Task] Update Tasks',
  props<{ tasks: Task[] }>()
);
export const handleError = createAction(
  '[Error] Handle Error',
  props<{ error: string }>()
);
