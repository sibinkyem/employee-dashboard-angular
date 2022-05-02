import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MENU_ITEMS } from 'src/app/core';
import { LoggedInUserService } from './core/services';


@Component({
  selector: 'emp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'employee-dashboard';
  menuItems = MENU_ITEMS;
  showNavBar = false;
  isLoggedIn$!: Observable<boolean>;

  constructor(private loginService: LoggedInUserService) {
  }

  ngOnInit(): void {
    this.isLoggedIn$ = this.loginService.isLoggedIn;
  }



}
