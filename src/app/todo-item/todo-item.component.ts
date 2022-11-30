import { Component, OnInit, Input } from '@angular/core';
import { ITodo } from '../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: '../todo-item/todo-item.component.html',
  styleUrls: ['../todo-item/todo-item.component.scss']
})

export class TodoItemComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {

  }

  @Input()
  todo!: ITodo;

  getClass(status: ITodo['status']) {
    if (status === 'done') {
      return 'done';
    } else if (status === 'important') {
      return 'important';
    } else {
      return 'usual';
    }
  }

}
