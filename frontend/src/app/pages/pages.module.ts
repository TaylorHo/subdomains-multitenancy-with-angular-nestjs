import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule } from '@angular/router';
import { PagesRoutes } from './pages.routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MainComponent } from './main/main.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SubtenantComponent } from './subtenant/subtenant.component';

@NgModule({
  declarations: [AuthComponent, MainComponent, SubtenantComponent],
  exports: [AuthComponent, MainComponent, SubtenantComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    RouterModule.forChild(PagesRoutes),
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatIconModule,
  ],
})
export class PagesModule {}
