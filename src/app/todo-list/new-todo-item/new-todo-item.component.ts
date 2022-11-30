
import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { ITodo, TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-new-todo-item',
  templateUrl: './new-todo-item.component.html',
  styleUrls: ['./new-todo-item.component.scss']
})
export class NewTodoItemComponent {
  selectedStatus = '';

  constructor(
    @Inject(TodoService) public title: ITodo['title'],
    @Inject(TodoService) public status: ITodo['status']
  ) { }

  @Output() onAddTodo = new EventEmitter();

  receiveStatusTodo(data: ITodo['status']) {
    this.selectedStatus = data;
  }

}
