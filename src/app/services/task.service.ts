import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  addTask,
  loadTasks,
  removeTask,
  updateTasks,
} from '../store/actions/task.actions';
import { selectTasks } from '../store/selectors/task.selectors';
import { Task } from '../models/task.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks$: Observable<Task[]> = this.store.select(selectTasks);

  constructor(private store: Store) {}

  loadTasks() {
    this.store.dispatch(loadTasks());
  }

  addTask(description: string) {
    const id = uuidv4();
    this.store.dispatch(addTask({ id, description }));
  }

  removeTask(taskId: string) {
    this.store.dispatch(removeTask({ taskId }));
  }

  updateTasks(tasks: Task[]) {
    this.store.dispatch(updateTasks({ tasks }));
  }
}
