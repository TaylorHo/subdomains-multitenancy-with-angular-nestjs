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
  public tenant: string = '';

  constructor(
    private readonly router: Router,
    private readonly verification: VerificationsService,
    private readonly tenantService: TenantService,
    private readonly helper: HelperService,
    private readonly toast: MatSnackBar
  ) {}

  async ngOnInit(): Promise<void | boolean> {
    this.tenant = this.helper.getTenant() ?? '';
    if (!this.tenant) return this.router.navigate(['login']);

    const doesTenantExists = await this.verification.doesTenantExist(this.tenant);
    if (!doesTenantExists) this.router.navigate(['login']);

    this.tenantService.getAllSub(this.tenant).subscribe(tenants => {
      this.subTenants = tenants;
    });

    this.loading = false;
  }

  public async createSubTenant(element: HTMLInputElement) {
    if (!element.value) return this.error('Insira o nome do seu Tenant');

    this.tenantService
      .createOneSub(element.value, this.tenant)
      .pipe(
        catchError(err => {
          if (err.status === 409) {
            this.error('Já existe um Sub Tenant com esse nome.');
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

  public goToSubTenantPage(tenant: string) {
    this.router.navigate(['sub', tenant]);
  }

  private genericError() {
    this.toast.open('Tenant Já existente. Escolha outro nome', 'Okay', {
      duration: 3000
    });
  }

  private error(text: string) {
    this.toast.open(text, 'Okay', {
      duration: 3000
    });
  }
}
