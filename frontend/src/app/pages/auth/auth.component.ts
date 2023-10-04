import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  constructor(
    private readonly auth: AuthService,
    private readonly toast: MatSnackBar,
    private readonly helper: HelperService,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    const tenant = this.helper.getTenant();

    if (tenant) this.router.navigate(['/']);
  }

  public login(element: HTMLInputElement) {
    if (!element.value) return this.error();
    this.auth.login(element.value)
  }

  public register(element: HTMLInputElement) {
    if (!element.value) return this.error();
    this.auth.register(element.value)
  }

  private error() {
    this.toast.open('Insira o nome do seu Tenant', 'Okay', {
      duration: 3000,
    });
  }
}
