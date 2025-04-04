import { Component, importProvidersFrom } from '@angular/core';
import { NgFor } from '@angular/common';
import { Task } from '../../Task';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  imports: [NgFor, TaskItemComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks: Task[] = [];

  constructor(private taskService:TaskService) {
  }

  ngOnInit() : void {
    this.tasks = this.taskService.getTasks();
  }
}
