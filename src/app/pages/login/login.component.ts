import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedInUserService } from 'src/app/core/services';

@Component({
  selector: 'emp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private loginService: LoggedInUserService,
    private router: Router
  ) {
    if (this.loginService.loggedInUserDetail) {
      this.router.navigate(['/']);
    }
  }
}
