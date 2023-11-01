import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() updateTask = new EventEmitter<Task>();
  @Output() deleteTask = new EventEmitter<number>();
  @Output() toggleTask = new EventEmitter<number>();

  showEditMenu = false;
  title = '';
  description = '';
  dueDate = '';

  handleUpdateTask() {
    if (!this.title || !this.description || !this.dueDate) {
      alert('Please fill out all fields');
      return;
    }
    const updatedTask = {
      ...this.task,
      title: this.title,
      description: this.description,
      dueDate: this.dueDate,
    };
    this.updateTask.emit(updatedTask);
    this.showEditMenu = false;
  }

  handleDeleteTask() {
    this.deleteTask.emit(this.task.id);
  }

  handleToggleTask() {
    this.toggleTask.emit(this.task.id);
  }

  handleEditClick() {
    this.showEditMenu = !this.showEditMenu;
    if (this.showEditMenu) {
      this.title = this.task.title;
      this.description = this.task.description;
      this.dueDate = this.task.dueDate;
    }
  }

  arrow = 'assets/arrow.svg';
}
