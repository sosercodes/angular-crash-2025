import { Component, importProvidersFrom } from '@angular/core';
import { NgFor } from '@angular/common';
import { Observable, of } from 'rxjs';

import { Task } from '../../Task';

import { TaskItemComponent } from '../task-item/task-item.component';
import { AddTaskComponent } from '../add-task/add-task.component';

import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  imports: [NgFor, TaskItemComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((t) => (this.tasks = t));
  }

    
  deleteTask(task: Task) {
    console.log(task);
    this.taskService.deleteTask(task).subscribe(
     () => (this.tasks = this.tasks.filter((t) => t.id !== task.id)) // filter it out from the ui
    );
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTask(task).subscribe();
  }

  addTask(task: Task) {
    console.log(task);
    this.taskService.addTask(task).subscribe((t) => (this.tasks.push(t)));
  }
}
