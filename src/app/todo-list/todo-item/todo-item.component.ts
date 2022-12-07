import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ITodo } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['../todo-item/todo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TodoItemComponent implements OnInit {
  selected = '';

  statuses = [{ name: 'Обычная', status: 'usual' }, { name: 'Важная', status: 'important' }, { name: 'Выполнена', status: 'done' }];

  constructor() { }

  ngOnInit(): void { }

  @Input()
  todo!: ITodo;
  @Output() onStatusUpdate = new EventEmitter();
  @Output() onDeleteTodo = new EventEmitter();

  getClass(status: ITodo['status']) {
    if (status === 'done') {
      return 'done';
    } else if (status === 'important') {
      return 'important';
    } else {
      return 'usual';
    }
  }

  changed() {
    this.onStatusUpdate.emit(this.selected);
  }

}
