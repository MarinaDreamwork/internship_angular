import { Component, Output, EventEmitter } from '@angular/core';

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

	@Output() onTextFilter = new EventEmitter();
	@Output() onStatusFilter = new EventEmitter();

	changed() {
		this.onStatusFilter.emit(this.selected);
	}
}
