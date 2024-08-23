import { Component } from '@angular/core';
import { AddTaskFormComponent } from '../../components/add-task/add-task-form.component';

@Component({
  selector: 'app-add-new-task',
  standalone: true,
  imports: [AddTaskFormComponent],
  templateUrl: './add-new-task.component.html',
  styleUrl: './add-new-task.component.scss',
})
export class AddNewTaskComponent {}
