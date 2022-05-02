import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { LoggedInUserService } from 'src/app/core/services';

@Component({
  selector: 'emp-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {
  constructor(
    private loggedInService: LoggedInUserService,
    private router: Router,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  logout(): void {
    this.loggedInService.logout();
  }

  cancel(): void {
    this.router.navigate(['/']);
  }
}
