import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { TenantService } from './tenant.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private host = environment.host;
  private protocol = environment.protocol;

  constructor(private tenantService: TenantService) {}

  public login(id: string) {
    this.tenantService.getOne(id).subscribe(tenant => {
      window.location.href = `${this.protocol}://${tenant.id}.${this.host}`;
    });
  }

  public register(id: string) {
    this.tenantService.createOne(id).subscribe(tenant => {
      window.location.href = `${this.protocol}://${tenant.id}.${this.host}`;
    });
  }
}
