import {Component, Output, EventEmitter} from "angular2/core";
import {Todo} from '../todo/todo'

@Component({
    selector: 'add-todo',
    templateUrl: 'components/addTodo/addTodo.html'
})
export class AddTodo {
    @Output() addTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
    @Output() emptyTask: EventEmitter<Todo> = new EventEmitter<Todo>();

    newTask: string = '';
    limit: Date;
    submitTodo(): void {
        if (this.newTask) {
            let newTodo:Todo = {
                task: this.newTask,
                done: false,
                limit: this.limit
            };
            this.addTodo.emit(newTodo);
            this.newTask = '';
            this.limit = undefined;
        } else {
            this.emptyTask.emit(null);
        }
    };
}