import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export type IStatus = [
  { name: 'Обычная', status: 'usual' },
  { name: 'Важная', status: 'important' },
  { name: 'Выполнена', status: 'done' }
];

export interface ITodo {
  id: number,
  title: string,
  status: 'usual' | 'important' | 'done'
}

@Injectable()
export class TodoService {
  todos: any;
  filteredTodo: Array<ITodo> | undefined = [];

  constructor(private http: HttpClient) {
    this.http.get('assets/todo-list.json').subscribe(data => {
      console.log('data', data, 'data.typeof', typeof data);
      this.todos = data;
    })
  }

  onAddTodo(data: { title: ITodo['title'], status: ITodo['status'] }): void {
    if (this.todos) {
      const newTodo = { id: Date.now(), ...data };
      this.todos.push(newTodo);
    }
  }

  deleteTodo(id: ITodo['id']) {
    if (this.todos) {
      this.todos = this.todos.filter((todo: ITodo) => todo.id !== id);
    }
  }

  updateTodo(data: { id: ITodo['id'], newStatus: ITodo['status'] }) {
    if (this.todos) {
      this.todos = this.todos.map((el: ITodo) => el.id === data.id ? { ...el, status: data.newStatus } : el);
    }
  }

  filterText(searchText: string): void {
    if (this.todos) {
      this.filteredTodo = this.todos.filter((todo: ITodo) => todo.title.toLowerCase().includes(searchText.toLowerCase()));
    }
  }
  filterStatus(status: ITodo['status']): ITodo[] | undefined {
    if (this.todos) {
      const filtered = this.todos.filter((todo: ITodo) => todo.status === status);
      if (filtered) {
        this.filteredTodo = filtered;
      } else return;
    } else return;
    return;
  }
}
