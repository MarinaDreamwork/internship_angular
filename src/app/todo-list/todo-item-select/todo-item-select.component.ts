import { createInjectableType } from '@angular/compiler';
import { Component, Output, EventEmitter, Inject, Input, ChangeDetectionStrategy } from '@angular/core';
import { ITodo } from 'src/app/services/todo.service';

@Component({
	selector: 'app-todo-item-select',
	templateUrl: './todo-item-select.component.html',
	styleUrls: ['./todo-item-select.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemSelectComponent {
	selected: ITodo['status'] | '' = '';
	statuses = [{ name: 'Обычная', status: 'usual' }, { name: 'Важная', status: 'important' }, { name: 'Выполнена', status: 'done' }];
	constructor() { }

	@Output() onStatusUpdate = new EventEmitter();
	@Input() todo!: ITodo;
	@Output() receiveStatusTodo = new EventEmitter();

	changed() {
		console.log('this.selected', this.selected);
		this.receiveStatusTodo.emit(this.selected);
	}

}
