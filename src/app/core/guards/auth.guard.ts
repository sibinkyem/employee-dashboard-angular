import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LoggedInUserService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public loginService: LoggedInUserService, public router: Router) {}

  /*canActivate(route: ActivatedRouteSnapshot): boolean {
    const allowedRoles = route.data['allowedRoles'];
    if (this.userService.loggedInUser.roles) {
      return this.userService.loggedInUser.roles.some((role) =>
        allowedRoles.includes(role)
      );
    }
    return false;
  }*/

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user = this.loginService.loggedInUserDetail;

    if (Object.keys(user).length !== 0) {
        // authorised so return true
        console.log('heello', user)
        return true;
    }

    // not logged in so redirect to login page with the return url
    //this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    this.router.navigate(['/login']);
    console.log('heello222', state.url)
    return false;
}

}
