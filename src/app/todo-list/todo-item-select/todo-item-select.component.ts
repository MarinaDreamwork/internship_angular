import { createInjectableType } from '@angular/compiler';
import { Component, Output, EventEmitter, Inject, Input } from '@angular/core';
import { ITodo } from 'src/app/services/todo.service';

@Component({
	selector: 'app-todo-item-select',
	templateUrl: './todo-item-select.component.html',
	styleUrls: ['./todo-item-select.component.scss']
})
export class TodoItemSelectComponent {
	selected = '';
	search: string = '';
	statuses = [{ name: 'Обычная', status: 'usual' }, { name: 'Важная', status: 'important' }, { name: 'Выполнена', status: 'done' }];
	constructor() { }

	@Output() onStatusUpdate = new EventEmitter();
	@Input() todo!: ITodo;

	changed() {
		console.log('selected', this.selected);
		this.onStatusUpdate.emit(this.selected);
	}
}
