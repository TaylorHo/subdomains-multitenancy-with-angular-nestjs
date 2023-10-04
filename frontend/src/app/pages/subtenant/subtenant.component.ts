import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from "@angular/router";
import { catchError, throwError } from 'rxjs';
import { HelperService } from 'src/app/services/helper.service';
import { TenantService } from 'src/app/services/tenant.service';

@Component({
  selector: 'app-subtenant',
  templateUrl: './subtenant.component.html',
  styleUrls: ['./subtenant.component.scss']
})
export class SubtenantComponent implements OnInit {
  public tenant: string = '';
  public loading: boolean = true;

  constructor(
    public router: Router,
    private readonly route: ActivatedRoute,
    private readonly tenantService: TenantService,
    private readonly helper: HelperService,
    private readonly toast: MatSnackBar,
  ) {
    this.route.params.subscribe(params => {
      if (params && params['id']) {
        this.tenant = params['id'];
      } else {
        this.router.navigate(['/']);
      }
    });
  }

  ngOnInit(): void {
    this.verifySubTenantExistence();
  }

  private verifySubTenantExistence() {
    const parent = this.helper.getTenant();
    if (!parent) return this.router.navigate(['login']);

    this.tenantService.getOneSub(this.tenant)
    .pipe(
      catchError(err => {
        if (err.status === 404) {
          this.toast.open('Sub Tenant inexistente.', 'Okay', {
            duration: 3000
          });
          this.router.navigate(['']);
        }
        this.loading = false;
        return throwError(err);
      })
    )
    .subscribe(() => {
      this.loading = false;
    });

    return;
  }
}
