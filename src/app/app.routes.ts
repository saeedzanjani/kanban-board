// app.routes.ts
import { Routes } from '@angular/router';
import { KanbanBoardComponent } from './views/kanban-board/kanban-board.component';
import { AddNewTaskComponent } from './views/add-new-task/add-new-task.component';

export const routes: Routes = [
  { path: '', component: KanbanBoardComponent },
  { path: 'new-task', component: AddNewTaskComponent },
  { path: '**', redirectTo: '' },
];
