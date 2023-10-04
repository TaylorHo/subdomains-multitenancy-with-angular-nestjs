import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  constructor() {}

  public getTenant(): string | undefined {
    const urlRegex = /\/([^/]+)\./;
    const currentUrl = window.location.href;
    const match = currentUrl.match(urlRegex);

    if (match && match[1]) {
      const tenant = match[1];
      return tenant;
    } else {
      return;
    }
  }

  public getApiURL(): string {
    const tenant = this.getTenant();

    if (tenant) {
      return `${environment.protocol}://${tenant}.${environment.api}`;
    } else {
      return `${environment.protocol}://${environment.api}`;
    }
  }
}
