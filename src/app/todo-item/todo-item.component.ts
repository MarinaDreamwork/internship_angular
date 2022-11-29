import { Component } from '@angular/core';

export interface ITodo {
  id: number,
  title: string,
  status: 'usual' | 'important' | 'done'
}

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})

export class TodoItemComponent {
  todos: Array<ITodo> = [
    { id: 1, title: 'Выучить Angular', status: 'important' },
    { id: 2, title: 'Подготовить курсовой проект', status: 'usual' },
    { id: 3, title: 'Попасть на стажировку', status: 'done' }
  ];

  constructor() { }

}
