import { Injectable } from '@angular/core';
import { TenantService } from './tenant.service';
import { firstValueFrom } from 'rxjs';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class VerificationsService {
  constructor(
    private tenantService: TenantService,
    private helper: HelperService
  ) {}

  public async doesTenantExist(): Promise<boolean> {
    const tenantId = this.helper.getTenant();

    if (!tenantId) return false;
    const tenant = await firstValueFrom(this.tenantService.getOne(tenantId));

    if (tenant && tenant.id) return true;
    return false;
  }
}
