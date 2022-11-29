import { Component } from '@angular/core';
import { ITodo, TodoService } from '../services/todo.service';



@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})

export class TodoItemComponent {

  constructor(public todoService: TodoService) { }

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
