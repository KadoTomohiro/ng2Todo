import {Component, Output, EventEmitter} from "angular2/core";
import {Todo} from '../todo/todo'

@Component({
    selector: 'add-todo',
    templateUrl: 'components/addTodo/addTodo.html'
})
export class AddTodo {
    @Output() addTodo = new EventEmitter();
    @Output() emptyTask = new EventEmitter();

    newTask: string = '';

    submitTodo(): void {
        if (!this.newTask) {
            this.emptyTask.emit();
        } else {
            let newTodo: Todo = {
                task: this.newTask,
                done: false
            };
            this.addTodo.emit(newTodo);
            this.newTask = '';
        }
    };
}