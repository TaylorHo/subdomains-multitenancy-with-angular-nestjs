import { Injectable } from '@angular/core';
import { TenantService } from './tenant.service';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerificationsService {
  constructor(private tenantService: TenantService) {}

  public async doesTenantExist(tenantId: string): Promise<boolean> {
    const tenant = await firstValueFrom(this.tenantService.getOne(tenantId));

    if (tenant && tenant.id) return true;
    return false;
  }
}
