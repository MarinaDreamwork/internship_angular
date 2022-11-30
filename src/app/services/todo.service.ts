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
  count = 4;
  todos: Array<ITodo> = [
    { id: 1, title: 'Выучить Angular', status: 'important' },
    { id: 2, title: 'Подготовить курсовой проект', status: 'usual' },
    { id: 3, title: 'Попасть на стажировку', status: 'done' }
  ];
  constructor() { }

  onAddTodo(data: { title: ITodo['title'], status: ITodo['status'] }) {
    console.log('data', data);
    console.log('this.todos', this.todos);
    this.todos.push({ id: Date.now(), ...data });
  }

  deleteTodo(id: ITodo['id']) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  updateTodo(id: ITodo['id'], newStatus: ITodo['status']) {
    this.todos[id].status = newStatus;
  }

}
