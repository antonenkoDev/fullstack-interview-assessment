import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Task Management</h1>
    <app-task-form></app-task-form>
    <app-task-list></app-task-list>
  `
})
export class AppComponent {
  title = 'Task Management';
}
