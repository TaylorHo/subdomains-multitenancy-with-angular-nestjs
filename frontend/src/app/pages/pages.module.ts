import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule } from '@angular/router';
import { PagesRoutes } from './pages.routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AuthComponent],
  exports: [AuthComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    RouterModule.forChild(PagesRoutes),
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class PagesModule {}
