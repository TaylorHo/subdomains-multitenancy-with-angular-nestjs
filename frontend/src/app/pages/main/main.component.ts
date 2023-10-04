import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import ISubTenant from 'src/app/models/sub-tenant.model';
import { HelperService } from 'src/app/services/helper.service';
import { TenantService } from 'src/app/services/tenant.service';
import { VerificationsService } from 'src/app/services/verifications.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public loading: boolean = true;
  public subTenants: ISubTenant[] = [];

  constructor(
    private router: Router,
    private verification: VerificationsService,
    private tenantService: TenantService,
    private helper: HelperService,
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
}
