import { Component, Input } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];

  handleDeleteTask(taskId: number) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  handleToggleTask(taskId: number) {
    this.tasks = this.tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
  }

  handleUpdateTask(updatedTask: Task) {
    this.tasks = this.tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
  }
}
