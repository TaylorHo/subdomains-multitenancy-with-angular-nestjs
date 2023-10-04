import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { MainComponent } from './main/main.component';
import { SubtenantComponent } from './subtenant/subtenant.component';

export const PagesRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'login',
    component: AuthComponent,
  },
  {
    path: 'sub/:id',
    component: SubtenantComponent,
  }
];
