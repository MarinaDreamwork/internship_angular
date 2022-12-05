import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-list/todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NewTodoItemComponent } from './todo-list/new-todo-item/new-todo-item.component';
import { FormsModule } from '@angular/forms';
import { TodoItemSearchComponent } from './todo-list/todo-item-search/todo-item-search.component';
import { TodoItemSelectComponent } from './todo-list/todo-item-select/todo-item-select.component';
import { AuthComponent } from './auth/auth.component';
import { DescriptionProjectComponent } from './description-project/description-project.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoListComponent,
    NewTodoItemComponent,
    TodoItemSearchComponent,
    TodoItemSelectComponent,
    AuthComponent,
    DescriptionProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
