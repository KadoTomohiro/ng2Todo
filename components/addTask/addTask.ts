import {Component, Output, EventEmitter} from "angular2/core";

@Component({
    selector: 'add-task',
    templateUrl: 'components/addTask/addTask.html'
})
export class AddTask {
    @Output() addTask = new EventEmitter();
    @Output() emptyTask = new EventEmitter();

    newTask: string = '';

    submitTask(): void {
        if (!this.newTask) {
            this.emptyTask.emit();
        } else {
            this.addTask.emit(this.newTask);
            this.newTask = '';
        }
    };
}