import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, NgStyle } from '@angular/common';

import { Task } from '../../Task';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  imports: [FontAwesomeModule, CommonModule, NgStyle],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;

  onDelete(task: Task) {
    // console.log(task)
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task) {
    this.onToggleReminder.emit(task);
  }
}
