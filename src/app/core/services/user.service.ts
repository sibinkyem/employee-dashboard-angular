import { Injectable } from '@angular/core';
import { LoggedInUserService } from './logged-in-user.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private loggedInUserService: LoggedInUserService) { }

  /*hasAdministrationWriteAccess(): boolean {
    return (
      this.loggedInUserService.loggedInUser.roles?.includes(
        UserRoles.ITAdmin
      ) ?? false
    );
  }*/
}
