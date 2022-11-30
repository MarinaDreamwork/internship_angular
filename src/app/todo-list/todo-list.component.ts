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
    this.todoService.onAddTodo(data);
  }
  onTextFilter(searchText: string): void {
    console.log('searchText', searchText);
    if (this.todoService.todos) {
      console.log('this.todoService.todos', this.todoService.todos);
      this.todoService.filteredTodo = this.todoService.todos.filter(todo => todo.title.toLowerCase().includes(searchText.toLowerCase()));
    }
    console.log('filtered', this.todoService.filteredTodo);
  }
  onStatusFilter(status: ITodo['status']): ITodo[] | undefined {
    console.log('status', status);
    if (this.todoService.todos) {
      const filtered = this.todoService.todos.filter(todo => todo.status === status);
      if (filtered) {
        this.todoService.filteredTodo = filtered;
      } else return;
    } else return;
    console.log('filtered', this.todoService.filteredTodo);
    return;

  }

}
