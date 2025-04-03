import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { TASKS } from '../../mock-tasks';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  imports: [NgFor],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks: Task[] = TASKS;
}
