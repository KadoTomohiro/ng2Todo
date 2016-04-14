import {Component, Input} from "angular2/core";
import {Todo} from '../todo/todo'

@Component({
    selector: 'todo-list',
    templateUrl: 'components/todoList/todoList.html'
})
export class TodoList {
    @Input() todos: Todo[];
}