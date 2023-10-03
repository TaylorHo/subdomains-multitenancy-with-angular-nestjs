import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

export const PagesRoutes: Routes = [
  {
    path: '',
    component: AuthComponent,
  },
];
