import { Component } from '@angular/core';

interface Task {
  id: number;
  description: string;
  completed: boolean;
}

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent {
  tasks: Task[] = [];
  newTaskDescription = '';

  createNewTask() {
    const newTask: Task = {
      id: this.tasks.length + 1,
      description: this.newTaskDescription,
      completed: false
    };
    this.tasks.push(newTask);
    this.newTaskDescription = '';
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(t => t.id !== task.id);
  }

  toggleTaskCompletion(task: Task) {
    task.completed = !task.completed;
  }
}