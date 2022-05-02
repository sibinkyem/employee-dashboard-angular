import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoggedInUser, Login } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class LoggedInUserService {
  private loggedInUserState: BehaviorSubject<LoggedInUser>;
  public isLoggedIn: BehaviorSubject<boolean>;

  constructor(private router: Router) {
    const userObj = String(localStorage.getItem('user'));
    this.loggedInUserState = new BehaviorSubject<LoggedInUser>(
      JSON.parse(userObj)
    );
    if (this.loggedInUserDetail) {
      this.isLoggedIn = new BehaviorSubject<boolean>(true);
    } else {
      this.isLoggedIn = new BehaviorSubject<boolean>(false);
    }
  }

  public get loggedInUserDetail(): LoggedInUser {
    return this.loggedInUserState.value;
  }

  login(request: Login): Observable<any> {
    if (
      request.username === environment.username &&
      request.password === environment.password
    ) {
      const user = {
        id: 101,
        name: 'Sibin',
        email: 'sibin@fingent.com',
        loggedIn: true,
      };
      localStorage.setItem('user', JSON.stringify(user));
      this.loggedInUserState.next(user);
      this.isLoggedIn.next(true);
      return this.loggedInUserState;
    } else {
      return throwError(() => new Error('Invalid login'));
    }
  }

  logout(): void {
    this.loggedInUserState.next({} as LoggedInUser);
    this.isLoggedIn.next(false);
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
