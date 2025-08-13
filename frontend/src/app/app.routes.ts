import { Routes } from '@angular/router';
import { PunkListComponent } from './punk-list/punk-list';
import { LoginComponent } from './login/login';
import { authGuard } from './punk-list/auth.guard';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'punk-list', component: PunkListComponent, canActivate: [authGuard] }
];
