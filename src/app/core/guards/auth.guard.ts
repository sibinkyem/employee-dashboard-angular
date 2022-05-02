import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { LoggedInUserService } from '../services';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    public loginService: LoggedInUserService,
    public router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const user = this.loginService.loggedInUserDetail;
    if (!user) {
      this.router.navigate(['/login']);
      return false;
    } else {
      const objLength = Object.keys(user).length;
      if (objLength !== 0) {
        return true;
      }
      this.router.navigate(['/login']);
      return false;
    }
  }
}
