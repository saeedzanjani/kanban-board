import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.model';
import { TaskItemComponent } from '../task-item/task-item.component';
import { KanbanColumnHeaderComponent } from '../kanban-column-header/kanban-column-header.component';

@Component({
  selector: 'app-kanban-column',
  templateUrl: './kanban-column.component.html',
  styleUrls: ['./kanban-column.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    TaskItemComponent,
    DragDropModule,
    KanbanColumnHeaderComponent,
  ],
})
export class KanbanColumnComponent {
  @Input() column!: string;
  @Input() tasks$!: Observable<Task[]>;
  @Input() columns!: string[];
  @Output() drop = new EventEmitter<CdkDragDrop<Task[]>>();
  @Output() removeTask = new EventEmitter<string>();

  getTasksForColumn(tasks: Task[], column: string): Task[] {
    return tasks.filter((task) => task.status === column);
  }

  onDrop(event: CdkDragDrop<Task[]>) {
    this.drop.emit(event);
  }

  getColumnBackgroundColor(column: string): string {
    switch (column) {
      case 'To Do':
        return '#ed9f9f';
      case 'Implementing':
        return '#f7e198';
      case 'Done':
        return '#8fec86';
      default:
        return '#ed9f9f';
    }
  }
}
