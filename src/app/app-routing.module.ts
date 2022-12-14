import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DescriptionProjectComponent } from './description-project/description-project.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  { path: 'todo_list', component: TodoListComponent, canActivate: [AuthGuard] },
  { path: 'login', component: AuthComponent },
  { path: 'about', component: DescriptionProjectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthService]
})
export class AppRoutingModule { }
