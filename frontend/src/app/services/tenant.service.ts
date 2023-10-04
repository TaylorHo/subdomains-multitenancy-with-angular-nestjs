import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ITenant from '../models/tenant.model';
import { Observable } from 'rxjs';
import ISubTenant from '../models/sub-tenant.model';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class TenantService {
  private api = '';

  constructor(
    private http: HttpClient,
    private helper: HelperService
  ) {
    this.api = helper.getApiURL();
  }

  public getOne(id: string): Observable<ITenant> {
    return this.http.get<ITenant>(this.api + '/tenant/' + id);
  }

  public createOne(id: string): Observable<ITenant> {
    return this.http.post<ITenant>(this.api + '/tenant/', {
      id
    });
  }

  public getOneSub(id: string): Observable<ISubTenant> {
    return this.http.get<ISubTenant>(this.api + '/sub/' + id);
  }

  public createOneSub(id: string, parent: string): Observable<ISubTenant> {
    return this.http.post<ISubTenant>(this.api + '/sub/', {
      id,
      parent
    });
  }

  public getAll(): Observable<ITenant[]> {
    return this.http.get<ITenant[]>(this.api + '/tenant/');
  }

  public getAllSub(id: string): Observable<ISubTenant[]> {
    return this.http.get<ISubTenant[]>(this.api + '/sub/');
  }
}
