import { Task } from '../models/task.model';

export function saveStateToLocalStorage(tasks: Task[]): void {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}

export function updateTaskOrder(
  stateTasks: Task[],
  updatedTasks: Task[]
): Task[] {
  const updatedTaskMap = new Map(
    updatedTasks.map((task, index) => [task.id, { ...task, index }])
  );

  return stateTasks
    .map((task) =>
      updatedTaskMap.has(task.id) ? (updatedTaskMap.get(task.id) as Task) : task
    )
    .sort((a, b) => (a.index ?? 0) - (b.index ?? 0));
}

export function getDataFromLocalStorage(key: string): Task[] {
  if (typeof localStorage === 'undefined') {
    console.warn('localStorage is not available');
    return [];
  }

  try {
    const data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    }
    return [];
  } catch (error) {
    console.error('Error retrieving data from local storage:', error);
    return [];
  }
}
