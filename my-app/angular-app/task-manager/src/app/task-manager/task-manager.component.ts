import { Component } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css'],
})
export class TaskManagerComponent {
  tasks: Task[] = [
    {
      id: 0,
      title: 'Learn Angular',
      description: 'Learn how to use Angular',
      dueDate: '2021-03-01',
      completed: true,
    },
  ];

  addTask(task: Task) {
    this.tasks = [...this.tasks, task];
  }
}
