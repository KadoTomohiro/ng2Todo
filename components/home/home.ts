import {Component} from 'angular2/core'
import {AddTask} from '../addTask/addTask'

@Component({
  selector: 'my-app',
  template: `
    <h1>My First {{name}} {{1+1}} Todo App</h1>
    <ul>
      <li *ngFor="#task of tasks">
        {{task}}
      </li>
    </ul>
    <add-task (addTask)="add($event)" (emptyTask)="emptyAdd()"></add-task>
    {{message}}
    `,
  directives: [AddTask]
})

export class AppComponent {
  public name = 'Angular';
  public tasks = [];
  public message: string = '';

  add(newTask) {
    this.tasks.push(newTask);
  }

  emptyAdd() {
    this.message = 'タスクを入力してください';
    setTimeout(() => this.message = '', 5000);
  }
}
　