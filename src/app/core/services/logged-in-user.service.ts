import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoggedInUser, Login } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoggedInUserService {
  private loggedInUserState: BehaviorSubject<LoggedInUser>;
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
    this.loggedInUserState = new BehaviorSubject<LoggedInUser>({} as LoggedInUser);
  }

  public get loggedInUserDetail(): LoggedInUser {
    return this.loggedInUserState.value;
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  login(request: Login): Observable<any>  {
    if(request.username === environment.username && request.password === environment.password) {
      const user = {
        id: 101,
        name: 'Sibin',
        email: 'sibin@fingent.com'
      };
      this.loggedInUserState.next(user);
      this.loggedIn.next(true);
      return this.loggedInUserState;
    } else {
      return throwError(() => new Error('Invalid login'))
    }

  }

  logout(): void {
    this.loggedInUserState.next({} as LoggedInUser);
      this.router.navigate(['/login']);
  }
}
