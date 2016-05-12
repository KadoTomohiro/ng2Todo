import {Component} from 'angular2/core'
import {AddTodo} from '../addTodo/addTodo'
import {TodoList} from '../todoList/todoList'
import {Todo} from '../todo/todo'
import {isNumeric} from "rxjs/util/isNumeric";


enum Tab {
  open,
  close,
  all
}
@Component({
  selector: 'my-app',
  template: `
    <h1>My First {{name}} {{1+1}} Todo App</h1>{{keys}}
    <button (click)="changeTab(tabs.open)">Open<span>({{openTodos().length}})</span></button>
    <button (click)="changeTab(tabs.close)">Close<span>({{closedTodos().length}})</span></button>
    <button (click)="changeTab(tabs.all)">All<span>({{todos.length}})</span></button>
    <todo-list [todos]="openTodos()" *ngIf="currentTab === tabs.open"></todo-list>
    <todo-list [todos]="closedTodos()" *ngIf="currentTab === tabs.close"></todo-list>
    <todo-list [todos]="todos" *ngIf="currentTab === tabs.all"></todo-list>


    <add-todo (addTodo)="add($event)" (emptyTask)="emptyAdd()"></add-todo>
    {{message}}
    `,
  directives: [AddTodo, TodoList]
})

export class AppComponent {
  name: string = 'Angular';
  todos: Todo[] = [];
  message: string = '';

  currentTab: Tab = Tab.open;

  tabs = Tab;
  tabKeys;

  constructor() {
    this.tabKeys = Object.keys(this.tabs).filter(key => isNumeric(key));
  }

  add(newTodo): void {
    this.todos.push(newTodo);
  }

  emptyAdd(): void {
    this.message = 'タスクを入力してください';
    setTimeout(() => this.message = '', 3000);
  }

  openTodos(): Todo[] {
    return this.todos.filter(todo => !todo.done);
  }

  closedTodos(): Todo[] {
    return this.todos.filter(todo => todo.done);
  }

  changeTab(tab: Tab): void {
    this.currentTab = tab;
  }

}
