import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '../task.service';

@Component({
  selector: 'app-task-list',
  template: `
    <div *ngFor="let task of tasks">
      <h3>{{ task.title }}</h3>
      <p>{{ task.description }}</p>
      <div>Priority: {{ task.priority }}</div>
      <select [(ngModel)]="task.status" (change)="updateStatus(task.id, task.status)">
        <option value="TODO">To Do</option>
        <option value="IN_PROGRESS">In Progress</option>
        <option value="DONE">Done</option>
      </select>
      <button (click)="deleteTask(task.id)">Delete</button>
    </div>
  `
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe(
      tasks => this.tasks = tasks
    );
  }

  updateStatus(id: number, status: Task['status']) {
    this.taskService.updateTaskStatus(id, status).subscribe();
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(() => {
      this.tasks = this.tasks.filter(task => task.id !== id);
    });
  }
}
