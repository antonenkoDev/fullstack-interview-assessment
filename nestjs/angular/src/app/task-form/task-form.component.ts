import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  template: `
    <form (ngSubmit)="onSubmit()">
      <div>
        <label for="title">Title:</label>
        <input
          id="title"
          type="text"
          [(ngModel)]="title"
          name="title"
          required
        >
      </div>
      
      <div>
        <label for="description">Description:</label>
        <textarea
          id="description"
          [(ngModel)]="description"
          name="description"
          required
        ></textarea>
      </div>
      
      <div>
        <label for="priority">Priority:</label>
        <select
          id="priority"
          [(ngModel)]="priority"
          name="priority"
        >
          <option value="LOW">Low</option>
          <option value="MEDIUM">Medium</option>
          <option value="HIGH">High</option>
        </select>
      </div>
      
      <div>
        <label for="status">Status:</label>
        <select
          id="status"
          [(ngModel)]="status"
          name="status"
        >
          <option value="TODO">To Do</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="DONE">Done</option>
        </select>
      </div>
      
      <button type="submit">Add Task</button>
    </form>
  `
})
export class TaskFormComponent {
  title = '';
  description = '';
  priority = 'LOW';
  status = 'TODO';

  constructor(private taskService: TaskService) { }

  onSubmit() {
    if (this.title.trim() && this.description.trim()) {
      this.taskService.createTask({
        title: this.title,
        description: this.description,
        status: this.status as 'TODO' | 'IN_PROGRESS' | 'DONE',
        priority: this.priority as 'LOW' | 'MEDIUM' | 'HIGH'
      }).subscribe(() => {
        this.title = '';
        this.description = '';
        this.priority = 'LOW';
        this.status = 'TODO';
      });
    }
  }
}
