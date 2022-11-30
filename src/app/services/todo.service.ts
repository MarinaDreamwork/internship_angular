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
  todos: Array<ITodo> | undefined = [
    { id: 1, title: 'Выучить Angular', status: 'important' },
    { id: 2, title: 'Подготовить курсовой проект', status: 'usual' },
    { id: 3, title: 'Попасть на стажировку', status: 'done' }
  ];
  filteredTodo: Array<ITodo> | undefined = [];

  constructor() { }

  onAddTodo(data: { title: ITodo['title'], status: ITodo['status'] }): void {
    console.log('data', data);
    if (this.todos) {
      const newTodo = { id: Date.now(), ...data };
      this.todos.push(newTodo);
    }
    console.log('filtered', this.filteredTodo);

  }

  deleteTodo(id: ITodo['id']) {
    if (this.todos) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    }

  }

  updateTodo(id: ITodo['id'], newStatus: ITodo['status']) {
    if (this.todos) {
      this.todos[id].status = newStatus;
    }
  }
}
