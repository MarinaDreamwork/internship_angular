import { Component, OnInit } from '@angular/core';
import { ITodo, TodoService } from '../services/todo.service';

export interface ITodoList {
  onAddTodo(title: ITodo['title'], status: ITodo['status']): void;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  statuses = [{ name: 'Обычная', status: 'usual' }, { name: 'Важная', status: 'important' }, { name: 'Выполнена', status: 'done' }]

  constructor(public todoService: TodoService) { }
  ngOnInit(): void {
    //this.todoService.todos
  }
  onAddTodo(data: { title: ITodo['title'], status: ITodo['status'] }) {
    this.todoService.onAddTodo(data);
  }
}
