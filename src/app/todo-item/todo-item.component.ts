import { Component, OnInit, Input } from '@angular/core';
import { ITodo, TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})

export class TodoItemComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {

  }

  @Input()
  todo!: ITodo;

  getClass(status: ITodo['status']) {
    console.log('status', status);
    if (status === 'done') {
      return 'done';
    } else if (status === 'important') {
      return 'important';
    } else {
      return 'usual';
    }
  }

}
