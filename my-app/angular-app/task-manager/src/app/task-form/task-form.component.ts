import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  @Output() addTask = new EventEmitter<any>();

  title = '';
  description = '';
  dueDate = '';

  handleSubmit() {
    if (!this.title || !this.description || !this.dueDate) {
      alert('Please fill out all fields');
      return;
    }
    const newTask = {
      id: Date.now(),
      title: this.title,
      description: this.description,
      dueDate: this.dueDate,
      completed: false,
    };
    this.addTask.emit(newTask);
    this.title = '';
    this.description = '';
    this.dueDate = '';
  }
}
