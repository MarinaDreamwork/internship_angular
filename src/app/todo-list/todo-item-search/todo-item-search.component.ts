import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item-search',
  templateUrl: './todo-item-search.component.html',
  styleUrls: ['./todo-item-search.component.scss']
})
export class TodoItemSearchComponent {
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
