import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VerificationsService } from 'src/app/services/verifications.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public loading: boolean = true;

  constructor(private router: Router, private verification: VerificationsService) {}

  async ngOnInit(): Promise<void> {
    const currentUrl = window.location.href;
    const mainUrl = `${environment.protocol}://${environment.host}/`;

    if (currentUrl === mainUrl) {
      this.router.navigate(['login']);
    } else {
      const doesTenantExist = await this.verification.doesTenantExist();

      if (!doesTenantExist) this.router.navigate(['login']);

      this.loading = false;
    }
  }
}
