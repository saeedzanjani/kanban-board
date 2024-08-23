import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Task, TaskStatus } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { KanbanColumnComponent } from '../../components/kanban-column/kanban-column.component';

@Component({
  selector: 'app-kanban-board',
  standalone: true,
  imports: [CommonModule, KanbanColumnComponent],
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KanbanBoardComponent implements OnInit {
  tasks$: Observable<Task[]> = this._taskService.tasks$;
  columns = ['To Do', 'Implementing', 'Done'];

  constructor(private _taskService: TaskService) {}

  ngOnInit(): void {
    this._taskService.loadTasks();
  }

  removeTask(taskId: string) {
    this._taskService.removeTask(taskId);
  }

  drop(event: CdkDragDrop<Task[]>, status: string) {
    const task = event.item.data as Task;
    if (!task) {
      console.error('No task data found!');
      return;
    }

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this._taskService.updateTasks([...event.container.data]);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      const updatedTasks: Task[] = event.container.data.map((t, idx) => ({
        ...t,
        status: status as TaskStatus,
        index: idx,
      }));

      this._taskService.updateTasks(updatedTasks);
    }
  }
}
