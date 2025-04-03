import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { TASKS } from '../../mock-tasks';
import { Task } from '../../Task';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-tasks',
  imports: [NgFor, TaskItemComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks: Task[] = TASKS;
}
