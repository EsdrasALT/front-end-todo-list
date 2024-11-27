import { Routes } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { TaskRegistrationComponent } from './task-registration/task-registration.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TaskListComponent } from './task-list/task-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: UserLoginComponent },
  { path: 'user-registration', component: UserRegistrationComponent },
  { path: 'tasks-registration', component: TaskRegistrationComponent},
  { path: 'task-list', component: TaskListComponent },
  { path: '**', component: NotFoundComponent }
  // Outras rotas, se houver
];
