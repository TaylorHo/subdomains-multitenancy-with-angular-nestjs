import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import ISubTenant from 'src/app/models/sub-tenant.model';
import { HelperService } from 'src/app/services/helper.service';
import { TenantService } from 'src/app/services/tenant.service';
import { VerificationsService } from 'src/app/services/verifications.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public loading: boolean = true;
  public subTenants: ISubTenant[] = [];

  constructor(
    private readonly router: Router,
    private readonly verification: VerificationsService,
    private readonly tenantService: TenantService,
    private readonly helper: HelperService,
    private readonly toast: MatSnackBar,
  ) {}

  async ngOnInit(): Promise<void | boolean> {
    const tenant = this.helper.getTenant();
    if (!tenant) return this.router.navigate(['login']);

    const doesTenantExists = await this.verification.doesTenantExist(tenant);
    if (!doesTenantExists) this.router.navigate(['login']);

    this.tenantService.getAllSub(tenant).subscribe((tenants) => {
      this.subTenants = tenants;
    });

    this.loading = false;
  }

  public async createSubTenant(element: HTMLInputElement) {
    if (!element.value) return this.error('Insira o nome da sua empresa');
    const parent = this.helper.getTenant();

    this.tenantService.createOneSub(element.value, parent!)
    .pipe(
      catchError(err => {
        if (err.status === 409) {
          this.error('Já existe uma fábrica com esse nome.');
        } else {
          this.genericError();
        }
        return throwError(err);
      })
    )
    .subscribe((newSubTenant: ISubTenant) => {
      this.subTenants.push(newSubTenant);
    });
  }

  private genericError() {
    this.toast.open('Empresa Já existente. Escolha outro nome', 'Okay', {
      duration: 3000
    });
  }

  private error(text: string) {
    this.toast.open(text, 'Okay', {
      duration: 3000
    });
  }
}
