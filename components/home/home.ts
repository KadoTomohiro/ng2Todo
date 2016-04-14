import {Component} from 'angular2/core'
import {AddTodo} from '../addTodo/addTodo'
import {TodoList} from '../todoList/todoList'
import {Todo} from '../todo/todo'

@Component({
  selector: 'my-app',
  template: `
    <h1>My First {{name}} {{1+1}} Todo App</h1>
    <todo-list [todos]="todos"></todo-list>

    <add-todo (addTodo)="add($event)" (emptyTask)="emptyAdd()"></add-todo>
    {{message}}
    `,
  directives: [AddTodo, TodoList]
})

export class AppComponent {
  public name = 'Angular';
  public todos: Todo[] = [];
  public message: string = '';

  add(newTodo) {
    this.todos.push(newTodo);
  }

  emptyAdd() {
    this.message = 'タスクを入力してください';
    setTimeout(() => this.message = '', 3000);
  }
}
　