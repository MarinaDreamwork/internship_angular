import { Injectable } from '@angular/core';
export interface ITodo {
  id: number,
  title: string,
  status: 'usual' | 'important' | 'done'
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Array<ITodo> = [
    { id: 1, title: 'Выучить Angular', status: 'important' },
    { id: 2, title: 'Подготовить курсовой проект', status: 'usual' },
    { id: 3, title: 'Попасть на стажировку', status: 'done' }
  ];
  constructor() { }

  addTodo(todo: ITodo) {
    this.todos.push(todo);
  }

  deleteTodo(id: ITodo['id']) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  updateTodo(id: ITodo['id'], newStatus: ITodo['status']) {
    this.todos[id].status = newStatus;
  }
}
