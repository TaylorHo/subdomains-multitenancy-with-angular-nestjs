import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { TenantService } from './tenant.service';
import { catchError, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private host = environment.host;
  private protocol = environment.protocol;

  constructor(
    private tenantService: TenantService,
    private readonly toast: MatSnackBar
  ) {}

  public login(id: string) {
    this.tenantService
      .getOne(id)
      .pipe(
        catchError(err => {
          if (err.status === 404) {
            this.error('Tenant não encontrado');
          } else {
            this.genericError();
          }
          return throwError(err);
        })
      )
      .subscribe(tenant => {
        window.location.href = `${this.protocol}://${tenant.id}.${this.host}`;
      });
  }

  public register(id: string) {
    this.tenantService
      .createOne(id)
      .pipe(
        catchError(err => {
          if (err.status === 409) {
            this.error('Tenant já existente. Escolha outro nome.');
          } else {
            this.genericError();
          }
          return throwError(err);
        })
      )
      .subscribe(tenant => {
        window.location.href = `${this.protocol}://${tenant.id}.${this.host}`;
      });
  }

  private genericError() {
    this.toast.open('Tenant já existente. Escolha outro nome', 'Okay', {
      duration: 3000
    });
  }

  private error(text: string) {
    this.toast.open(text, 'Okay', {
      duration: 3000
    });
  }
}
