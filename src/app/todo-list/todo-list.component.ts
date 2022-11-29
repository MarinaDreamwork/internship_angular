import { Component, OnInit } from '@angular/core';
import { ITodo, TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(public todoService: TodoService) { }
  ngOnInit(): void {
    //this.todoService.todos
  }

}
