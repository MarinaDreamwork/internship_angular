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
  selected = '';

  constructor(public todoService: TodoService) { }
  ngOnInit(): void {
    //this.todoService.todos
  }
  onAddTodo(data: { title: ITodo['title'], status: ITodo['status'] }) {
    console.log('data', data);
    this.todoService.onAddTodo(data);
  }

  onTextFilter(searchText: string) {
    this.todoService.filterText(searchText)
  }

  onStatusFilter(status: ITodo['status']) {
    this.todoService.filterStatus(status);
  }

  onStatusUpdate(data: { id: ITodo['id'], newStatus: ITodo['status'] }) {
    this.todoService.updateTodo(data);
  }

  onDeleteTodo(id: ITodo['id']) {
    this.todoService.deleteTodo(id);
  }
}
