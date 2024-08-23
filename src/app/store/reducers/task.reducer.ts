import { Action, createReducer, on } from '@ngrx/store';
import {
  addTask,
  loadTasksSuccess,
  removeTask,
  updateTasks,
} from '../actions/task.actions';
import { TaskState, TaskStatus } from '../../models/task.model';
import { updateTaskOrder } from '../../utils/task.utils';

export const initialState: TaskState = {
  tasks: [],
};

const _taskReducer = createReducer(
  initialState,
  on(loadTasksSuccess, (state, { tasks }) => ({
    ...state,
    tasks: [...tasks],
  })),
  on(addTask, (state, { id, description }) => ({
    ...state,
    tasks: [...state.tasks, { id, description, status: TaskStatus.ToDo }],
  })),
  on(removeTask, (state, { taskId }) => ({
    ...state,
    tasks: state.tasks.filter((task) => task.id !== taskId),
  })),
  on(updateTasks, (state, { tasks }) => ({
    ...state,
    tasks: updateTaskOrder(state.tasks, tasks),
  }))
);

export function taskReducer(
  state: TaskState | undefined,
  action: Action
): TaskState {
  return _taskReducer(state, action);
}
