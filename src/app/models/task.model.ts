export enum TaskStatus {
  ToDo = 'To Do',
  Implementing = 'Implementing',
  Done = 'Done',
}

export interface Task {
  id: string;
  description: string;
  status: TaskStatus;
  index?: number;
}

export interface TaskState {
  tasks: Task[];
}
