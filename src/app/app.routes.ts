import { Routes } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { TaskRegistrationComponent } from './task-registration/task-registration.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ObjectiveRegistrationComponent } from './objective-registration/objective-registration.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: UserLoginComponent },
  { path: 'user-registration', component: UserRegistrationComponent },
  { path: 'objective-registration', component: ObjectiveRegistrationComponent },
  {
    path: 'objective-registration/tasks',
    component: TaskRegistrationComponent,
  },
  { path: '**', component: NotFoundComponent }
  // Outras rotas, se houver
];
