import {Component, Input} from "angular2/core";
import {Todo} from '../todo/todo'
@Component({
    selector: 'todo-list',
    template: `
    <ul>
      <li *ngFor="#todo of todos">
        <input type="checkbox" [(ngModel)]="todo.done">
        <span [style.textDecoration]="todo.done ? 'line-through' : 'none'">{{todo.task}}</span>
        <span *ngIf="todo.limit"><time>{{todo.limit}}</time>まで</span>
      </li>
    </ul>
    `
})
export class TodoList {
    @Input() todos: Todo[];
    today: Date = new Date();
}